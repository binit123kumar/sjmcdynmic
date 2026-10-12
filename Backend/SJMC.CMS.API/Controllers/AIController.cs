using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SJMC.CMS.API.Helpers;
using SJMC.CMS.API.Services;

namespace SJMC.CMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class AIController : ControllerBase
    {
        private readonly IAIService _aiService;
        private readonly IConfiguration _config;

        public AIController(IAIService aiService, IConfiguration config)
        {
            _aiService = aiService;
            _config = config;
        }

        [HttpGet("status")]
        public IActionResult Status()
        {
            return Ok(ApiResponse<object>.Ok(new
            {
                Available = _aiService.IsAvailable,
                Model = _config["AI:Model"] ?? "gpt-4o-mini",
            }));
        }

        [HttpPost("content")]
        public async Task<IActionResult> GenerateContent([FromBody] AIRequest request)
        {
            if (!_aiService.IsAvailable)
                return StatusCode(503, ApiResponse<object>.Fail("AI service is not configured. Set AI:ApiKey in configuration."));

            var result = await _aiService.GenerateContentAsync(request.Prompt);
            return Ok(ApiResponse<string>.Ok(result ?? "No response generated."));
        }

        [HttpPost("alt-text")]
        public async Task<IActionResult> GenerateAltText([FromBody] AltTextRequest request)
        {
            if (!_aiService.IsAvailable)
                return StatusCode(503, ApiResponse<object>.Fail("AI service is not configured."));

            var result = await _aiService.GenerateAltTextAsync(request.ImageDescription, request.Context ?? "");
            return Ok(ApiResponse<string>.Ok(result ?? "No alt text generated."));
        }

        [HttpPost("summary")]
        public async Task<IActionResult> GenerateSummary([FromBody] SummaryRequest request)
        {
            if (!_aiService.IsAvailable)
                return StatusCode(503, ApiResponse<object>.Fail("AI service is not configured."));

            var result = await _aiService.GenerateSummaryAsync(request.Content);
            return Ok(ApiResponse<string>.Ok(result ?? "No summary generated."));
        }

        [HttpPost("seo")]
        public async Task<IActionResult> OptimizeSeo([FromBody] SeoRequest request)
        {
            if (!_aiService.IsAvailable)
                return StatusCode(503, ApiResponse<object>.Fail("AI service is not configured."));

            var result = await _aiService.OptimizeSeoAsync(request.Title, request.Description ?? "");
            return Ok(ApiResponse<string>.Ok(result ?? "No SEO optimization generated."));
        }

        [HttpPost("draft")]
        public async Task<IActionResult> DraftContent([FromBody] DraftRequest request)
        {
            if (!_aiService.IsAvailable)
                return StatusCode(503, ApiResponse<object>.Fail("AI service is not configured."));

            var result = await _aiService.DraftContentAsync(request.ContentType, request.Topic);
            return Ok(ApiResponse<string>.Ok(result ?? "No content drafted."));
        }
    }

    public class AIRequest
    {
        [System.ComponentModel.DataAnnotations.Required]
        public string Prompt { get; set; } = string.Empty;
    }

    public class AltTextRequest
    {
        [System.ComponentModel.DataAnnotations.Required]
        public string ImageDescription { get; set; } = string.Empty;
        public string? Context { get; set; }
    }

    public class SummaryRequest
    {
        [System.ComponentModel.DataAnnotations.Required]
        public string Content { get; set; } = string.Empty;
    }

    public class SeoRequest
    {
        [System.ComponentModel.DataAnnotations.Required]
        public string Title { get; set; } = string.Empty;
        [System.ComponentModel.DataAnnotations.Required]
        public string Description { get; set; } = string.Empty;
    }

    public class DraftRequest
    {
        [System.ComponentModel.DataAnnotations.Required]
        public string ContentType { get; set; } = string.Empty;
        [System.ComponentModel.DataAnnotations.Required]
        public string Topic { get; set; } = string.Empty;
    }
}
