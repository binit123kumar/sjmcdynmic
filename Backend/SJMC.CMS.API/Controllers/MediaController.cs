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
    public class MediaController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly IFileService _fileService;

        public MediaController(ApplicationDbContext db, IFileService fileService)
        { _db = db; _fileService = fileService; }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] string? category = null)
        {
            var query = _db.MediaFiles.Where(x => x.IsActive);
            if (!string.IsNullOrWhiteSpace(category)) query = query.Where(x => x.Category == category);
            return Ok(ApiResponse<List<MediaFile>>.Ok(await query.OrderByDescending(x => x.UploadedDate).ToListAsync()));
        }

        [HttpPost, Authorize]
        public async Task<IActionResult> Create([FromForm] MediaFormDto dto)
        {
            if (dto.File == null) return BadRequest(ApiResponse<object>.Fail("File is required."));
            var fileType = GetFileType(dto.File);
            if (fileType == null) return BadRequest(ApiResponse<object>.Fail("Only image, PDF, DOC, and DOCX files are allowed."));

            var result = await _fileService.SaveFileAsync(dto.File, "media", dto.Title);
            var entity = new MediaFile
            {
                FileName = result.OriginalFileName, StoredFileName = result.StoredFileName,
                FileType = fileType, FilePath = result.Path, Title = dto.Title,
                AltText = dto.AltText, Description = dto.Description, Category = dto.Category,
                FileSize = dto.File.Length, UploadedDate = DateTime.UtcNow,
                DisplayOrder = dto.DisplayOrder, IsActive = dto.IsActive
            };
            _db.MediaFiles.Add(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<MediaFile>.Ok(entity, "Media uploaded successfully."));
        }

        [HttpPut("{id}"), Authorize]
        public async Task<IActionResult> Update(int id, [FromForm] MediaFormDto dto)
        {
            var entity = await _db.MediaFiles.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Media not found."));
            entity.Title = dto.Title; entity.AltText = dto.AltText; entity.Description = dto.Description;
            entity.Category = dto.Category; entity.DisplayOrder = dto.DisplayOrder; entity.IsActive = dto.IsActive;
            entity.UpdatedAt = DateTime.UtcNow;
            if (dto.File != null)
            {
                var fileType = GetFileType(dto.File);
                if (fileType == null) return BadRequest(ApiResponse<object>.Fail("Only image, PDF, DOC, and DOCX files are allowed."));
                _fileService.DeleteFile(entity.FilePath);
                var result = await _fileService.SaveFileAsync(dto.File, "media", dto.Title);
                entity.FileName = result.OriginalFileName; entity.StoredFileName = result.StoredFileName;
                entity.FileType = fileType; entity.FilePath = result.Path; entity.FileSize = dto.File.Length;
                entity.UploadedDate = DateTime.UtcNow;
            }
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<MediaFile>.Ok(entity, "Media updated successfully."));
        }

        [HttpDelete("{id}"), Authorize]
        public async Task<IActionResult> Delete(int id)
        {
            var entity = await _db.MediaFiles.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Media not found."));
            _fileService.DeleteFile(entity.FilePath);
            _db.MediaFiles.Remove(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(null!, "Media deleted successfully."));
        }

        private static string? GetFileType(IFormFile file)
        {
            return Path.GetExtension(file.FileName).ToLowerInvariant() switch
            {
                ".jpg" or ".jpeg" or ".png" or ".gif" or ".webp" => "image",
                ".pdf" => "pdf",
                ".doc" or ".docx" => "document",
                _ => null
            };
        }
    }

    public class MediaFormDto
    {
        public string Title { get; set; } = string.Empty;
        public string? AltText { get; set; }
        public string? Description { get; set; }
        public string? Category { get; set; }
        public int DisplayOrder { get; set; } = 1;
        public bool IsActive { get; set; } = true;
        public IFormFile? File { get; set; }
    }
}