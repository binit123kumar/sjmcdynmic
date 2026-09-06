using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SJMC.CMS.API.Data;
using SJMC.CMS.API.Helpers;
using SJMC.CMS.API.Models;
using SJMC.CMS.API.Services;

namespace SJMC.CMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContentPagesController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly IFileService _fileService;

        public ContentPagesController(ApplicationDbContext db, IFileService fileService)
        { _db = db; _fileService = fileService; }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] bool activeOnly = false)
        {
            var query = _db.ContentPages.AsQueryable();
            if (activeOnly) query = query.Where(x => x.IsActive);
            return Ok(ApiResponse<List<ContentPage>>.Ok(await query.OrderBy(x => x.DisplayOrder).ToListAsync()));
        }

        [HttpGet("{slug}")]
        public async Task<IActionResult> GetBySlug(string slug)
        {
            var page = await _db.ContentPages.FirstOrDefaultAsync(x => x.Slug == slug && x.IsActive);
            return page == null
                ? NotFound(ApiResponse<object>.Fail("Page not found."))
                : Ok(ApiResponse<ContentPage>.Ok(page));
        }

        [HttpPost, Authorize]
        public async Task<IActionResult> Create([FromForm] ContentPageFormDto dto)
        {
            var slug = Slugify(dto.Slug, dto.Title);
            if (await _db.ContentPages.AnyAsync(x => x.Slug == slug))
                return Conflict(ApiResponse<object>.Fail("A page with this slug already exists."));

            var entity = new ContentPage
            {
                Slug = slug, Title = dto.Title, Body = dto.Body, Category = dto.Category,
                Excerpt = dto.Excerpt, MetaTitle = dto.MetaTitle, MetaDescription = dto.MetaDescription,
                CoverAltText = dto.CoverAltText, DisplayOrder = dto.DisplayOrder, IsActive = dto.IsActive
            };
            if (dto.CoverImage != null) entity.CoverImagePath = (await _fileService.SaveFileAsync(dto.CoverImage, "pages", dto.Title)).Path;
            _db.ContentPages.Add(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<ContentPage>.Ok(entity, "Page created successfully."));
        }

        [HttpPut("{id}"), Authorize]
        public async Task<IActionResult> Update(int id, [FromForm] ContentPageFormDto dto)
        {
            var entity = await _db.ContentPages.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Page not found."));
            var slug = Slugify(dto.Slug, dto.Title);
            if (await _db.ContentPages.AnyAsync(x => x.Id != id && x.Slug == slug))
                return Conflict(ApiResponse<object>.Fail("A page with this slug already exists."));

            entity.Slug = slug; entity.Title = dto.Title; entity.Body = dto.Body; entity.Category = dto.Category;
            entity.Excerpt = dto.Excerpt; entity.MetaTitle = dto.MetaTitle; entity.MetaDescription = dto.MetaDescription;
            entity.CoverAltText = dto.CoverAltText; entity.DisplayOrder = dto.DisplayOrder; entity.IsActive = dto.IsActive;
            entity.UpdatedAt = DateTime.UtcNow;
            if (dto.CoverImage != null)
            {
                _fileService.DeleteFile(entity.CoverImagePath);
                entity.CoverImagePath = (await _fileService.SaveFileAsync(dto.CoverImage, "pages", dto.Title)).Path;
            }
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<ContentPage>.Ok(entity, "Page updated successfully."));
        }

        [HttpDelete("{id}"), Authorize]
        public async Task<IActionResult> Delete(int id)
        {
            var entity = await _db.ContentPages.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Page not found."));
            _fileService.DeleteFile(entity.CoverImagePath);
            _db.ContentPages.Remove(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(null!, "Page deleted successfully."));
        }

        [HttpPatch("{id}/toggle-status"), Authorize]
        public async Task<IActionResult> ToggleStatus(int id)
        {
            var entity = await _db.ContentPages.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Page not found."));
            entity.IsActive = !entity.IsActive; entity.UpdatedAt = DateTime.UtcNow;
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<ContentPage>.Ok(entity, "Status updated."));
        }

        private static string Slugify(string? value, string fallback)
        {
            var source = string.IsNullOrWhiteSpace(value) ? fallback : value;
            var chars = source.Trim().ToLowerInvariant().Select(c => char.IsLetterOrDigit(c) ? c : '-').ToArray();
            var slug = new string(chars).Trim('-');
            while (slug.Contains("--")) slug = slug.Replace("--", "-");
            return slug[..Math.Min(slug.Length, 120)];
        }
    }

    public class ContentPageFormDto
    {
        public string? Slug { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
        public string? Category { get; set; }
        public string? Excerpt { get; set; }
        public string? MetaTitle { get; set; }
        public string? MetaDescription { get; set; }
        public string? CoverAltText { get; set; }
        public int DisplayOrder { get; set; } = 1;
        public bool IsActive { get; set; } = true;
        public IFormFile? CoverImage { get; set; }
    }
}