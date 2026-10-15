using System.Threading.Tasks;

namespace SJMC.CMS.API.Services
{
    public interface IAIService
    {
        bool IsAvailable { get; }
        Task<string?> GenerateContentAsync(string prompt);
        Task<string?> GenerateAltTextAsync(string imageDescription, string context);
        Task<string?> GenerateSummaryAsync(string content);
        Task<string?> OptimizeSeoAsync(string title, string description);
        Task<string?> DraftContentAsync(string contentType, string topic);
    }
}
