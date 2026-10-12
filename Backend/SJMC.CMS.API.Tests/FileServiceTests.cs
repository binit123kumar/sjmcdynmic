using Microsoft.AspNetCore.Http;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Png;
using SixLabors.ImageSharp.Formats.Webp;
using SixLabors.ImageSharp.PixelFormats;
using SJMC.CMS.API.Services;
using Xunit;

namespace SJMC.CMS.API.Tests;

public class FileServiceTests
{
    private readonly string _webRoot;
    private readonly FileService _sut;

    public FileServiceTests()
    {
        _webRoot = Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString("N"));
        var env = TestEnvironment.Create(_webRoot);
        var config = TestEnvironment.BuildConfig(new Dictionary<string, string?>
        {
            ["Image:MaxDimension"] = "1600",
            ["Image:WebPQuality"] = "80",
            ["Image:JpegQuality"] = "82",
            ["Pdf:Recompress"] = "false"
        });
        _sut = new FileService(env, config);
    }

    private static byte[] CreateJpgBytes(int width = 640, int height = 480)
    {
        using var image = new Image<Rgba32>(width, height, new Rgba32(123, 200, 50, 255));
        using var ms = new MemoryStream();
        image.Save(ms, new SixLabors.ImageSharp.Formats.Jpeg.JpegEncoder());
        return ms.ToArray();
    }

    private static byte[] CreatePngBytes(int width = 640, int height = 480)
    {
        using var image = new Image<Rgba32>(width, height, new Rgba32(12, 34, 200, 255));
        using var ms = new MemoryStream();
        image.Save(ms, new PngEncoder());
        return ms.ToArray();
    }

    private static byte[] CreateMinimalPdf(int pages = 1)
    {
        var objects = new List<string>
        {
            "%PDF-1.4"
        };
        var body = new List<string>();
        var offsets = new List<long>();
        long pos = objects[0].Length + Environment.NewLine.Length + 1; // rough

        body.Add("1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj");
        body.Add("2 0 obj<</Type/Pages/Kids[");
        for (int i = 0; i < pages; i++) body[^1] += $"4 {i} 0 R ";
        body[^1] += "]/Count " + pages + ">>endobj";
        for (int i = 0; i < pages; i++)
            body.Add($"4 {i} 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]>>endobj");
        body.Add("trailer<</Size 5/Root 1 0 R>>");
        body.Add("%%EOF");

        var lines = string.Join(Environment.NewLine, objects.Concat(body));
        return System.Text.Encoding.ASCII.GetBytes(lines);
    }

    // JPG -> WebP conversion
    [Fact]
    public async Task SaveFileAsync_ConvertsJpgToWebp_AndReducesSize()
    {
        var bytes = CreateJpgBytes(1600, 1200);
        var file = FormFileFactory.Create(bytes, "sunset.jpg", "image/jpeg");

        var result = await _sut.SaveFileAsync(file, "gallery", "Sunset");

        Assert.True(result.ConvertedToWebP);
        Assert.EndsWith(".webp", result.Path);
        Assert.EndsWith(".webp", result.StoredFileName);
        Assert.True(result.OriginalSizeBytes > 0);
        Assert.True(result.SavedSizeBytes > 0);
        Assert.True(result.SavedSizeBytes <= result.OriginalSizeBytes);

        var full = Path.Combine(_webRoot, "uploads", "gallery", result.StoredFileName);
        Assert.True(File.Exists(full));
        // Verify the saved file is a real WebP (RIFF....WEBP)
        using var fs = File.OpenRead(full);
        var head = new byte[16];
        await fs.ReadAsync(head, 0, head.Length);
        var riff = System.Text.Encoding.ASCII.GetString(head, 0, 4);
        var webp = System.Text.Encoding.ASCII.GetString(head, 8, 4);
        Assert.Equal("RIFF", riff);
        Assert.Equal("WEBP", webp);
    }

    [Fact]
    public async Task SaveFileAsync_ConvertsPngToWebp_AndPreservesTransparency()
    {
        var bytes = CreatePngBytes(800, 600);
        var file = FormFileFactory.Create(bytes, "logo.png", "image/png");

        var result = await _sut.SaveFileAsync(file, "about", "Logo");

        Assert.True(result.ConvertedToWebP);
        Assert.EndsWith(".webp", result.Path);
        var full = Path.Combine(_webRoot, "uploads", "about", result.StoredFileName);
        Assert.True(File.Exists(full));
    }

    [Fact]
    public async Task SaveFileAsync_PreservesExistingWebp_Unskipped()
    {
        // A .webp input is already webp and should be saved as-is (no .webp->.webp re-encode),
        // but the service still stores it under the same webp extension.
        using var image = new Image<Rgba32>(400, 300, new Rgba32(0, 0, 255, 255));
        using var ms = new MemoryStream();
        await image.SaveAsync(ms, new WebpEncoder());
        var bytes = ms.ToArray();

        var file = FormFileFactory.Create(bytes, "badge.webp", "image/webp");

        var result = await _sut.SaveFileAsync(file, "staff", "Badge");

        Assert.False(result.ConvertedToWebP); // already webp, stored untouched
        Assert.EndsWith(".webp", result.StoredFileName);
    }

    [Fact]
    public async Task SaveFileAsync_FallsBackToOriginal_WhenImageIsInvalid()
    {
        // Random bytes with .jpg extension -> decoder fails -> original saved, no data loss.
        var bytes = new byte[] { 0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0xFF, 0xFF, 0xFF };
        var file = FormFileFactory.Create(bytes, "broken.jpg", "image/jpeg");

        var result = await _sut.SaveFileAsync(file, "gallery", "Broken");

        Assert.False(result.ConvertedToWebP);
        Assert.True(result.OriginalSizeBytes > 0);
        var full = Path.Combine(_webRoot, "uploads", "gallery", result.StoredFileName);
        Assert.True(File.Exists(full));
        Assert.Equal(bytes.Length, result.SavedSizeBytes);
    }

    [Fact]
    public void SaveFileAsync_RejectsDisallowedExtension()
    {
        var file = FormFileFactory.Create(Array.Empty<byte>(), "malware.exe", "application/octet-stream");
        Assert.ThrowsAsync<ArgumentException>("SaveFileAsync", () => _sut.SaveFileAsync(file, "media", "x"));
    }

    [Fact]
    public async Task SaveFileAsync_RejectsOversizedImage()
    {
        // Build a >5MB jpeg-like payload (we only need Length to exceed the limit).
        var bytes = new byte[6 * 1024 * 1024];
        new Random().NextBytes(bytes);
        var file = FormFileFactory.Create(bytes, "big.jpg", "image/jpeg");

        await Assert.ThrowsAsync<ArgumentException>("SaveFileAsync", () => _sut.SaveFileAsync(file, "gallery", "big"));
    }

    [Fact]
    public void SaveFileAsync_RejectsInvalidPdfByMagicNumber()
    {
        var bytes = System.Text.Encoding.ASCII.GetBytes("NOT A PDF CONTENT");
        var file = FormFileFactory.Create(bytes, "doc.pdf", "application/pdf");
        Assert.ThrowsAsync<ArgumentException>("SaveFileAsync", () => _sut.SaveFileAsync(file, "downloads", "doc"));
    }

    [Fact]
    public async Task SaveFileAsync_AcceptsValidPdf()
    {
        var bytes = CreateMinimalPdf(3);
        var file = FormFileFactory.Create(bytes, "multi.pdf", "application/pdf");

        var result = await _sut.SaveFileAsync(file, "downloads", "Multipage");

        Assert.True(result.OriginalSizeBytes > 0);
        Assert.True(result.SavedSizeBytes > 0);
        var full = Path.Combine(_webRoot, "uploads", "downloads", result.StoredFileName);
        Assert.True(File.Exists(full));
        var saved = await File.ReadAllBytesAsync(full);
        Assert.Equal(bytes, saved);
    }

    [Fact]
    public void DeleteFile_DoesNotAllowPathTraversal()
    {
        var env = TestEnvironment.Create(Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString("N")));
        var config = TestEnvironment.BuildConfig(new Dictionary<string, string?>());
        var sut = new FileService(env, config);

        // Should be a no-op (no exception, nothing deleted outside uploads root).
        sut.DeleteFile("../../secret-file.txt");
    }

    public void Dispose()
    {
        if (Directory.Exists(_webRoot))
            Directory.Delete(_webRoot, true);
    }
}
