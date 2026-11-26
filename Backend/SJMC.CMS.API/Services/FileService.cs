
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Webp;
using SixLabors.ImageSharp.Processing;

namespace SJMC.CMS.API.Services
{
    public class FileService : IFileService
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _config;

        private static readonly string[] AllowedExtensions =
            { ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".pdf", ".doc", ".docx" };

        private static readonly string[] ImageExtensions =
            { ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp" };

        private const long MaxFileSizeBytes = 10 * 1024 * 1024;
        private const int ImageSectionSizeBytes = 5 * 1024 * 1024;

        private static readonly string[] ImageFolders =
            { "gallery", "slider", "about", "staff", "faculty", "news", "events", "settings", "pages", "media" };

        private readonly int _maxDimension;
        private readonly int _webpQuality;
        private readonly int _jpegQuality;
        private readonly bool _pdfRecompress;

        public FileService(IWebHostEnvironment env, IConfiguration config)
        {
            _env = env;
            _config = config;

            _maxDimension = Math.Max(0,
                int.Parse(_config["Image:MaxDimension"] ?? "1600"));

            _webpQuality = Math.Clamp(
                int.Parse(_config["Image:WebPQuality"] ?? "80"), 1, 100);

            _jpegQuality = Math.Clamp(
                int.Parse(_config["Image:JpegQuality"] ?? "82"), 1, 100);

            _pdfRecompress =
                bool.TryParse(_config["Pdf:Recompress"] ?? "false", out var r) && r;
        }

        public async Task<string> SaveFileAsync(IFormFile file, string subFolder)
        {
            return (await SaveFileAsync(file, subFolder, null)).Path;
        }

        public async Task<FileSaveResult> SaveFileAsync(
            IFormFile file, string subFolder, string? title)
        {
            if (file == null || file.Length == 0)
                throw new ArgumentException("No file provided.");

            var originalSize = file.Length;
            var ext = Path.GetExtension(file.FileName).ToLowerInvariant();

            if (!AllowedExtensions.Contains(ext))
                throw new ArgumentException(
                    $"File type '{ext}' is not allowed.",
                    nameof(SaveFileAsync));

            if (ImageFolders.Contains(subFolder, StringComparer.OrdinalIgnoreCase))
            {
                var maxSize = ImageExtensions.Contains(ext)
                    ? ImageSectionSizeBytes
                    : MaxFileSizeBytes;

                if (file.Length > maxSize)
                    throw new ArgumentException(
                        $"File exceeds the {maxSize / (1024 * 1024)} MB limit.",
                        nameof(SaveFileAsync));
            }
            else
            {
                if (file.Length > MaxFileSizeBytes)
                    throw new ArgumentException(
                        $"File exceeds the {MaxFileSizeBytes / (1024 * 1024)} MB limit.",
                        nameof(SaveFileAsync));
            }

            ValidateContentType(file, ext);

            // Read the uploaded file exactly once.
            // All subsequent operations use the same byte array.
            byte[] fileBytes;

            await using (var inputStream = file.OpenReadStream())
            using (var memoryStream = new MemoryStream())
            {
                await inputStream.CopyToAsync(memoryStream);
                fileBytes = memoryStream.ToArray();
            }

            if (fileBytes.Length == 0)
                throw new ArgumentException("Uploaded file is empty.");

            var uploadsRoot = Path.Combine(
                _env.WebRootPath ?? "wwwroot",
                "uploads",
                subFolder);

            Directory.CreateDirectory(uploadsRoot);

            var slug = Slugify(title) ?? subFolder + "-file";
            var fileName = $"{slug}-{Guid.NewGuid():N}{ext}";
            var fullPath = Path.Combine(uploadsRoot, fileName);

            FileSaveResult result;

            // Convert supported images to WebP.
            if (ImageExtensions.Contains(ext) &&
                !ext.Equals(".webp", StringComparison.OrdinalIgnoreCase))
            {
                var webpFileName = $"{slug}-{Guid.NewGuid():N}.webp";
                var webpFullPath = Path.Combine(uploadsRoot, webpFileName);

                try
                {
                    long saved = await ConvertAndSaveImageAsync(
                        fileBytes, webpFullPath);

                    result = new FileSaveResult(
                        Path: $"/uploads/{subFolder}/{webpFileName}",
                        OriginalFileName: file.FileName,
                        StoredFileName: webpFileName,
                        ConvertedToWebP: true,
                        OriginalSizeBytes: originalSize,
                        SavedSizeBytes: saved);
                }
                catch (Exception ex) when (ex is not OperationCanceledException)
                {
                    // Conversion failed: preserve the original uploaded bytes.
                    if (File.Exists(webpFullPath))
                        File.Delete(webpFullPath);

                    await File.WriteAllBytesAsync(fullPath, fileBytes);

                    var fallbackSize = new FileInfo(fullPath).Length;

                    result = new FileSaveResult(
                        Path: $"/uploads/{subFolder}/{fileName}",
                        OriginalFileName: file.FileName,
                        StoredFileName: fileName,
                        ConvertedToWebP: false,
                        OriginalSizeBytes: originalSize,
                        SavedSizeBytes: fallbackSize);
                }
            }
            else
            {
                long saved;

                if (ext.Equals(".pdf", StringComparison.OrdinalIgnoreCase))
                {
                    saved = await SavePdfAsync(fileBytes, fullPath);
                }
                else
                {
                    await File.WriteAllBytesAsync(fullPath, fileBytes);
                    saved = new FileInfo(fullPath).Length;
                }

                result = new FileSaveResult(
                    Path: $"/uploads/{subFolder}/{fileName}",
                    OriginalFileName: file.FileName,
                    StoredFileName: fileName,
                    ConvertedToWebP: false,
                    OriginalSizeBytes: originalSize,
                    SavedSizeBytes: saved);
            }

            return result;
        }

        private async Task<long> ConvertAndSaveImageAsync(
            byte[] fileBytes, string webpFullPath)
        {
            using var inputStream = new MemoryStream(fileBytes);

            using var image = await Image.LoadAsync(inputStream);

            if (image.Metadata.DecodedImageFormat == null)
                throw new ArgumentException(
                    "Uploaded image could not be decoded.");

            // Resize while preserving aspect ratio.
            if (_maxDimension > 0 &&
                (image.Width > _maxDimension || image.Height > _maxDimension))
            {
                var options = new ResizeOptions
                {
                    Mode = ResizeMode.Max,
                    Size = new Size(_maxDimension, _maxDimension)
                };

                image.Mutate(x => x.Resize(options));
            }

            var encoder = new WebpEncoder
            {
                Quality = _webpQuality
            };

            await image.SaveAsync(webpFullPath, encoder);

            return new FileInfo(webpFullPath).Length;
        }

        private async Task<long> SavePdfAsync(
            byte[] fileBytes, string targetPath)
        {
            ValidatePdf(fileBytes);

            // PDF recompression remains opt-in.
            if (_pdfRecompress)
            {
                return await CompressPdfAsync(fileBytes, targetPath);
            }

            await File.WriteAllBytesAsync(targetPath, fileBytes);

            return new FileInfo(targetPath).Length;
        }

        private async Task<long> CompressPdfAsync(
            byte[] fileBytes, string targetPath)
        {
            var tempPath = targetPath + ".tmp";

            try
            {
                await File.WriteAllBytesAsync(tempPath, fileBytes);

                File.Move(tempPath, targetPath, overwrite: true);

                return new FileInfo(targetPath).Length;
            }
            catch
            {
                if (File.Exists(tempPath))
                    File.Delete(tempPath);

                if (File.Exists(targetPath))
                    File.Delete(targetPath);

                await File.WriteAllBytesAsync(targetPath, fileBytes);

                return new FileInfo(targetPath).Length;
            }
        }

        private static void ValidatePdf(byte[] fileBytes)
        {
            if (fileBytes.Length < 5 ||
                fileBytes[0] != (byte)'%' ||
                fileBytes[1] != (byte)'P' ||
                fileBytes[2] != (byte)'D' ||
                fileBytes[3] != (byte)'F' ||
                fileBytes[4] != (byte)'-')
            {
                throw new ArgumentException("File is not a valid PDF.");
            }
        }

        private static void ValidateContentType(
            IFormFile file, string extension)
        {
            var expected = extension switch
            {
                ".jpg" or ".jpeg" or ".png" or ".gif" or ".webp" or ".bmp"
                    => "image/",
                ".pdf" => "application/pdf",
                ".doc" or ".docx" => "application/",
                _ => string.Empty
            };

            if (!string.IsNullOrWhiteSpace(expected) &&
                !string.IsNullOrWhiteSpace(file.ContentType) &&
                !file.ContentType.StartsWith(
                    expected, StringComparison.OrdinalIgnoreCase))
            {
                throw new ArgumentException(
                    "The uploaded file content does not match its extension.");
            }
        }

        private static string? Slugify(string? value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return null;

            var chars = value.Trim()
                .ToLowerInvariant()
                .Select(character =>
                    char.IsLetterOrDigit(character) ? character : '-')
                .ToArray();

            var slug = new string(chars).Trim('-');

            while (slug.Contains("--"))
                slug = slug.Replace("--", "-");

            return string.IsNullOrWhiteSpace(slug)
                ? null
                : slug[..Math.Min(slug.Length, 80)];
        }

        public void DeleteFile(string? relativePath)
        {
            if (string.IsNullOrWhiteSpace(relativePath))
                return;

            var uploadsRoot = Path.GetFullPath(
                Path.Combine(_env.WebRootPath ?? "wwwroot", "uploads"));

            var fullPath = Path.GetFullPath(
                Path.Combine(
                    _env.WebRootPath ?? "wwwroot",
                    relativePath.TrimStart('/')
                        .Replace('/', Path.DirectorySeparatorChar)));

            if (!fullPath.StartsWith(
                uploadsRoot + Path.DirectorySeparatorChar,
                StringComparison.OrdinalIgnoreCase))
                return;

            if (File.Exists(fullPath))
                File.Delete(fullPath);
        }
    }
}