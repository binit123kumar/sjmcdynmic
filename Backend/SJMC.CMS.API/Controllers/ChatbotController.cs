using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SJMC.CMS.API.Data;
using SJMC.CMS.API.Helpers;
using SJMC.CMS.API.Models;

namespace SJMC.CMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatbotController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public ChatbotController(ApplicationDbContext db) => _db = db;

        [HttpPost("ask")]
        public async Task<IActionResult> Ask([FromBody] ChatRequest request)
        {
            if (string.IsNullOrWhiteSpace(request?.Message))
                return BadRequest(ApiResponse<object>.Fail("Message is required."));

            var query = request.Message.ToLowerInvariant();
            var results = new ChatResponse();

            var news = await _db.NewsItems
                .Where(n => n.IsActive &&
                    (n.Title.ToLowerInvariant().Contains(query) ||
                     n.Description != null && n.Description.ToLowerInvariant().Contains(query)))
                .Take(3)
                .Select(n => new ChatHit
                {
                    Source = "News",
                    Title = n.Title,
                    Snippet = n.Description?.Length > 150 ? n.Description[..150] : n.Description,
                    Link = $"/news/{n.Id}"
                })
                .ToListAsync();
            results.Results.AddRange(news);

            var events = await _db.EventItems
                .Where(e => e.IsActive &&
                    (e.Title.ToLowerInvariant().Contains(query) ||
                     e.Description != null && e.Description.ToLowerInvariant().Contains(query) ||
                     e.Venue != null && e.Venue.ToLowerInvariant().Contains(query)))
                .Take(3)
                .Select(e => new ChatHit
                {
                    Source = "Events",
                    Title = e.Title,
                    Snippet = e.Description?.Length > 150 ? e.Description[..150] : e.Description,
                    Link = $"/events/{e.Id}"
                })
                .ToListAsync();
            results.Results.AddRange(events);

            var gallery = await _db.GalleryItems
                .Where(g => g.IsActive &&
                    (g.Title.ToLowerInvariant().Contains(query) ||
                     g.AltText != null && g.AltText.ToLowerInvariant().Contains(query) ||
                     g.Description != null && g.Description.ToLowerInvariant().Contains(query)))
                .Take(3)
                .Select(g => new ChatHit
                {
                    Source = "Gallery",
                    Title = g.Title,
                    Snippet = g.Description?.Length > 150 ? g.Description[..150] : g.Description,
                    Link = $"/gallery/{g.Id}"
                })
                .ToListAsync();
            results.Results.AddRange(gallery);

            var pages = await _db.ContentPages
                .Where(p => p.IsActive &&
                    (p.Title.ToLowerInvariant().Contains(query) ||
                     p.Body != null && p.Body.ToLowerInvariant().Contains(query) ||
                     p.Excerpt != null && p.Excerpt.ToLowerInvariant().Contains(query) ||
                     p.Slug.ToLowerInvariant().Contains(query)))
                .Take(3)
                .Select(p => new ChatHit
                {
                    Source = "Pages",
                    Title = p.Title,
                    Snippet = p.Excerpt?.Length > 150 ? p.Excerpt[..150] : p.Body?.Length > 150 ? p.Body[..150] : p.Body,
                    Link = $"/content/{p.Slug}"
                })
                .ToListAsync();
            results.Results.AddRange(pages);

            var courses = await _db.Courses
                .Where(c => c.IsActive &&
                    (c.Name.ToLowerInvariant().Contains(query) ||
                     c.Description != null && c.Description.ToLowerInvariant().Contains(query)))
                .Take(3)
                .Select(c => new ChatHit
                {
                    Source = "Courses",
                    Title = c.Name,
                    Snippet = c.Description?.Length > 150 ? c.Description[..150] : c.Description,
                    Link = "/courses"
                })
                .ToListAsync();
            results.Results.AddRange(courses);

            if (results.Results.Count == 0)
            {
                results.Results.Add(new ChatHit
                {
                    Source = "General",
                    Title = "No direct match found",
                    Snippet = "I couldn't find specific content matching your query. Try searching for news, events, courses, gallery items, or pages.",
                    Link = null
                });
            }

            return Ok(ApiResponse<ChatResponse>.Ok(results, $"Found {results.Results.Count} result(s)."));
        }
    }

    public class ChatRequest
    {
        [System.ComponentModel.DataAnnotations.Required]
        public string Message { get; set; } = string.Empty;
    }

    public class ChatResponse
    {
        public List<ChatHit> Results { get; set; } = new();
    }

    public class ChatHit
    {
        public string Source { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string? Snippet { get; set; }
        public string? Link { get; set; }
    }
}
