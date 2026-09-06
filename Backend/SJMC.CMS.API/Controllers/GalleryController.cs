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
    public class GalleryController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly IFileService _fileService;
        private const string Folder = "gallery";

        public GalleryController(ApplicationDbContext db, IFileService fileService)
        { _db = db; _fileService = fileService; }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] bool activeOnly = false)
        {
            var query = _db.GalleryItems.AsQueryable();
            if (activeOnly) query = query.Where(x => x.IsActive);
            return Ok(ApiResponse<List<GalleryItem>>.Ok(await query.OrderBy(x => x.DisplayOrder).ToListAsync()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _db.GalleryItems.FindAsync(id);
            return item == null ? NotFound(ApiResponse<object>.Fail("Record not found.")) : Ok(ApiResponse<GalleryItem>.Ok(item));
        }

        [HttpPost, Authorize]
        public async Task<IActionResult> Create([FromForm] GalleryFormDto dto)
        {
            if (dto.Image == null) return BadRequest(ApiResponse<object>.Fail("Image is required."));
            var entity = new GalleryItem
            {
                Title = dto.Title, Category = dto.Category, AltText = dto.AltText,
                Description = dto.Description, LinkUrl = dto.LinkUrl,
                DisplayOrder = dto.DisplayOrder, IsActive = dto.IsActive, CreatedAt = DateTime.UtcNow,
            };
            FileSaveResult file;
            try
            {
                file = await _fileService.SaveFileAsync(dto.Image, Folder, dto.Title);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ApiResponse<object>.Fail(ex.Message));
            }
            entity.ImagePath = file.Path;
            entity.OriginalFileName = file.OriginalFileName;
            entity.StoredFileName = file.StoredFileName;
            entity.UploadedDate = DateTime.UtcNow;
            _db.GalleryItems.Add(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<GalleryItem>.Ok(entity, "Gallery image added successfully."));
        }

        [HttpPut("{id}"), Authorize]
        public async Task<IActionResult> Update(int id, [FromForm] GalleryFormDto dto)
        {
            var entity = await _db.GalleryItems.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Record not found."));
            entity.Title = dto.Title; entity.Category = dto.Category; entity.AltText = dto.AltText;
            entity.Description = dto.Description; entity.LinkUrl = dto.LinkUrl;
            entity.DisplayOrder = dto.DisplayOrder; entity.IsActive = dto.IsActive; entity.UpdatedAt = DateTime.UtcNow;
            if (dto.Image != null)
            {
                _fileService.DeleteFile(entity.ImagePath);
                FileSaveResult file;
                try
                {
                    file = await _fileService.SaveFileAsync(dto.Image, Folder, dto.Title);
                }
                catch (ArgumentException ex)
                {
                    return BadRequest(ApiResponse<object>.Fail(ex.Message));
                }
                entity.ImagePath = file.Path;
                entity.OriginalFileName = file.OriginalFileName;
                entity.StoredFileName = file.StoredFileName;
                entity.UploadedDate = DateTime.UtcNow;
            }
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<GalleryItem>.Ok(entity, "Gallery image updated successfully."));
        }

        [HttpDelete("{id}"), Authorize]
        public async Task<IActionResult> Delete(int id)
        {
            var entity = await _db.GalleryItems.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Record not found."));
            _fileService.DeleteFile(entity.ImagePath);
            _db.GalleryItems.Remove(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(null!, "Gallery image deleted successfully."));
        }

        [HttpPatch("{id}/toggle-status"), Authorize]
        public async Task<IActionResult> ToggleStatus(int id)
        {
            var entity = await _db.GalleryItems.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Record not found."));
            entity.IsActive = !entity.IsActive; entity.UpdatedAt = DateTime.UtcNow;
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<GalleryItem>.Ok(entity, "Status updated."));
        }
    }

    public class GalleryFormDto
    {
        public string Title { get; set; } = string.Empty;
        public string? Category { get; set; }
        public string? AltText { get; set; }
        public string? Description { get; set; }
        public string? LinkUrl { get; set; }
        public int DisplayOrder { get; set; } = 1;
        public bool IsActive { get; set; } = true;
        public IFormFile? Image { get; set; }
    }
}
