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
    public class AboutController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly IFileService _fileService;
        private const string Folder = "about";

        public AboutController(ApplicationDbContext db, IFileService fileService)
        {
            _db = db;
            _fileService = fileService;
        }

        // GET api/about  (public - used by the website; also used by the CMS list)
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] bool activeOnly = false)
        {
            var query = _db.Abouts.AsQueryable();
            if (activeOnly) query = query.Where(x => x.IsActive);
            var items = await query.OrderBy(x => x.DisplayOrder).ToListAsync();
            return Ok(ApiResponse<List<About>>.Ok(items));
        }

        // GET api/about/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _db.Abouts.FindAsync(id);
            if (item == null) return NotFound(ApiResponse<object>.Fail("Record not found."));
            return Ok(ApiResponse<About>.Ok(item));
        }

        // POST api/about  (multipart/form-data)
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create([FromForm] AboutFormDto dto)
        {
            var entity = new About
            {
                Title = dto.Title ?? string.Empty,
                Description = dto.Description,
                DisplayOrder = dto.DisplayOrder,
                ShowOnHomePage = dto.ShowOnHomePage,
                ShowOnAboutPage = dto.ShowOnAboutPage,
                ShowOnFooter = dto.ShowOnFooter,
                ShowOnVisionMission = dto.ShowOnVisionMission,
                ShowOnRoleOfSJMC = dto.ShowOnRoleOfSJMC,
                ShowOnFounderDirector = dto.ShowOnFounderDirector,
                ShowOnCareers = dto.ShowOnCareers,
                IsActive = dto.IsActive,
                CreatedAt = DateTime.UtcNow
            };

            if (dto.Image != null)
                entity.ImagePath = await _fileService.SaveFileAsync(dto.Image, Folder);

            _db.Abouts.Add(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<About>.Ok(entity, "About created successfully."));
        }

        // PUT api/about/5  (multipart/form-data)
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Update(int id, [FromForm] AboutFormDto dto)
        {
            var entity = await _db.Abouts.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Record not found."));

            entity.Title = dto.Title ?? string.Empty;
            entity.Description = dto.Description;
            entity.DisplayOrder = dto.DisplayOrder;
            entity.ShowOnHomePage = dto.ShowOnHomePage;
            entity.ShowOnAboutPage = dto.ShowOnAboutPage;
            entity.ShowOnFooter = dto.ShowOnFooter;
            entity.ShowOnVisionMission = dto.ShowOnVisionMission;
            entity.ShowOnRoleOfSJMC = dto.ShowOnRoleOfSJMC;
            entity.ShowOnFounderDirector = dto.ShowOnFounderDirector;
            entity.ShowOnCareers = dto.ShowOnCareers;
            entity.IsActive = dto.IsActive;
            entity.UpdatedAt = DateTime.UtcNow;

            if (dto.Image != null)
            {
                _fileService.DeleteFile(entity.ImagePath);
                entity.ImagePath = await _fileService.SaveFileAsync(dto.Image, Folder);
            }

            await _db.SaveChangesAsync();
            return Ok(ApiResponse<About>.Ok(entity, "About updated successfully."));
        }

        // DELETE api/about/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete(int id)
        {
            var entity = await _db.Abouts.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Record not found."));

            _fileService.DeleteFile(entity.ImagePath);
            _db.Abouts.Remove(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(null!, "About deleted successfully."));
        }

        // PATCH api/about/5/toggle-status
        [HttpPatch("{id}/toggle-status")]
        [Authorize]
        public async Task<IActionResult> ToggleStatus(int id)
        {
            var entity = await _db.Abouts.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Record not found."));

            entity.IsActive = !entity.IsActive;
            entity.UpdatedAt = DateTime.UtcNow;
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<About>.Ok(entity, "Status updated."));
        }
    }

    public class AboutFormDto
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int DisplayOrder { get; set; } = 1;
        public bool ShowOnHomePage { get; set; }
        public bool ShowOnAboutPage { get; set; } = true;
        public bool ShowOnFooter { get; set; }
        public bool ShowOnVisionMission { get; set; }
        public bool ShowOnRoleOfSJMC { get; set; }
        public bool ShowOnFounderDirector { get; set; }
        public bool ShowOnCareers { get; set; }
        public bool IsActive { get; set; } = true;
        public IFormFile? Image { get; set; }
    }
}