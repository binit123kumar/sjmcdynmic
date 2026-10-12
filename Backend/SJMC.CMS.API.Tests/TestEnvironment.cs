using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;

namespace SJMC.CMS.API.Tests;

public sealed class TestEnvironment : IWebHostEnvironment
{
    public string EnvironmentName { get; set; } = "Testing";
    public string ApplicationName { get; set; } = "SJMC.CMS.API.Tests";
    public string ContentRootPath { get; set; } = null!;
    public IFileProvider ContentRootFileProvider { get; set; } = new NullFileProvider();
    public string WebRootPath { get; set; } = null!;
    public IFileProvider WebRootFileProvider { get; set; } = new NullFileProvider();

    public static TestEnvironment Create(string webRootPath)
    {
        Directory.CreateDirectory(webRootPath);
        return new TestEnvironment
        {
            ContentRootPath = webRootPath,
            WebRootPath = webRootPath,
            WebRootFileProvider = new PhysicalFileProvider(webRootPath)
        };
    }

    public static IConfiguration BuildConfig(IDictionary<string, string?> values)
        => new ConfigurationBuilder().AddInMemoryCollection(values).Build();
}

public static class FormFileFactory
{
    public static FormFile Create(byte[] content, string fileName, string contentType)
    {
        return new FormFile(new MemoryStream(content), 0, content.Length, "file", fileName)
        {
            Headers = new HeaderDictionary(),
            ContentType = contentType
        };
    }
}
