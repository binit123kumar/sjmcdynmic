using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace SJMC.CMS.API.Services
{
    public interface IFileService
    {
        Task<string> SaveFileAsync(IFormFile file, string subFolder);
        Task<FileSaveResult> SaveFileAsync(IFormFile file, string subFolder, string? title);
        void DeleteFile(string? relativePath);
    }

    public sealed record FileSaveResult(
        string Path,
        string OriginalFileName,
        string StoredFileName,
        bool ConvertedToWebP = false,
        long OriginalSizeBytes = 0,
        long SavedSizeBytes = 0);
}
