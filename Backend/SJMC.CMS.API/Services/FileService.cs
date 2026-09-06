namespace SJMC.CMS.API.Services
{
    // Saves files under wwwroot/uploads/{subFolder}/ and returns a web-relative path
    // like "/uploads/about/guid_filename.jpg" that the frontend can use directly.
    public class FileService : IFileService
    {
        private readonly IWebHostEnvironment _env;
        private static readonly string[] AllowedExtensions =
            { ".jpg", ".jpeg", ".png", ".gif", ".webp", ".pdf", ".doc", ".docx" };
        private const long MaxFileSizeBytes = 10 * 1024 * 1024; // 10 MB

        public FileService(IWebHostEnvironment env) => _env = env;

        public async Task<string> SaveFileAsync(IFormFile file, string subFolder)
        {
            return (await SaveFileAsync(file, subFolder, null)).Path;
        }

        public async Task<FileSaveResult> SaveFileAsync(IFormFile file, string subFolder, string? title)
        {
            if (file == null || file.Length == 0)
                throw new ArgumentException("No file provided.");

            var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (!AllowedExtensions.Contains(ext))
                throw new ArgumentException($"File type '{ext}' is not allowed.");

            var imageExtensions = new[] { ".jpg", ".jpeg", ".png", ".webp", ".gif" };
            var imageFolder = new[] { "gallery", "slider", "about", "staff", "faculty", "news", "events", "settings", "pages" }
                .Contains(subFolder, StringComparer.OrdinalIgnoreCase);
            var maxSize = imageFolder && imageExtensions.Contains(ext) ? 5 * 1024 * 1024 : MaxFileSizeBytes;
            if (file.Length > maxSize)
                throw new ArgumentException($"File exceeds the {maxSize / (1024 * 1024)} MB limit.");
            if (imageFolder && !imageExtensions.Contains(ext))
                throw new ArgumentException("This section accepts only JPG, JPEG, PNG, WEBP, or GIF images.");

            ValidateContentType(file, ext);

            var uploadsRoot = Path.Combine(_env.WebRootPath ?? "wwwroot", "uploads", subFolder);
            Directory.CreateDirectory(uploadsRoot);

            var slug = Slugify(title) ?? subFolder + "-file";
            var fileName = $"{slug}-{Guid.NewGuid():N}{ext}";
            var fullPath = Path.Combine(uploadsRoot, fileName);

            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return new FileSaveResult($"/uploads/{subFolder}/{fileName}", Path.GetFileName(file.FileName), fileName);
        }

        private static void ValidateContentType(IFormFile file, string extension)
        {
            var expected = extension switch
            {
                ".jpg" or ".jpeg" or ".png" or ".gif" or ".webp" => "image/",
                ".pdf" => "application/pdf",
                ".doc" or ".docx" => "application/",
                _ => string.Empty
            };
            if (!string.IsNullOrWhiteSpace(expected) && !string.IsNullOrWhiteSpace(file.ContentType) && !file.ContentType.StartsWith(expected, StringComparison.OrdinalIgnoreCase))
                throw new ArgumentException("The uploaded file content does not match its extension.");
        }

        private static string? Slugify(string? value)
        {
            if (string.IsNullOrWhiteSpace(value)) return null;
            var chars = value.Trim().ToLowerInvariant().Select(character => char.IsLetterOrDigit(character) ? character : '-').ToArray();
            var slug = new string(chars).Trim('-');
            while (slug.Contains("--")) slug = slug.Replace("--", "-");
            return string.IsNullOrWhiteSpace(slug) ? null : slug[..Math.Min(slug.Length, 80)];
        }

        public void DeleteFile(string? relativePath)
        {
            if (string.IsNullOrWhiteSpace(relativePath)) return;
            var uploadsRoot = Path.GetFullPath(Path.Combine(_env.WebRootPath ?? "wwwroot", "uploads"));
            var fullPath = Path.GetFullPath(Path.Combine(_env.WebRootPath ?? "wwwroot", relativePath.TrimStart('/').Replace('/', Path.DirectorySeparatorChar)));
            if (!fullPath.StartsWith(uploadsRoot + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase)) return;
            if (File.Exists(fullPath)) File.Delete(fullPath);
        }
    }
}
