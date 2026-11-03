using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SJMC.CMS.API.Data;
using SJMC.CMS.API.Helpers;
using SJMC.CMS.API.Models;

namespace SJMC.CMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HeroContentController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public HeroContentController(ApplicationDbContext db) => _db = db;

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _db.HeroContents
                .Where(x => x.IsActive)
                .OrderBy(x => x.DisplayOrder)
                .ToListAsync();
            return Ok(ApiResponse<object>.Ok(items));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _db.HeroContents.FindAsync(id);
            if (item == null) return NotFound(ApiResponse<object>.Fail("HeroContent not found"));
            return Ok(ApiResponse<object>.Ok(item));
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create([FromBody] HeroContent item)
        {
            _db.HeroContents.Add(item);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(item, "HeroContent created successfully"));
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Update(int id, [FromBody] HeroContent item)
        {
            var existing = await _db.HeroContents.FindAsync(id);
            if (existing == null) return NotFound(ApiResponse<object>.Fail("HeroContent not found"));

            existing.Tagline = item.Tagline;
            existing.Pillars = item.Pillars;
            existing.CtaButtons = item.CtaButtons;
            existing.CampusImagePath = item.CampusImagePath;
            existing.MediaStudioImagePath = item.MediaStudioImagePath;
            existing.DisplayOrder = item.DisplayOrder;
            existing.IsActive = item.IsActive;
            existing.UpdatedAt = DateTime.UtcNow;

            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(existing, "HeroContent updated successfully"));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _db.HeroContents.FindAsync(id);
            if (item == null) return NotFound(ApiResponse<object>.Fail("HeroContent not found"));

            _db.HeroContents.Remove(item);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(null, "HeroContent deleted successfully"));
        }
    }
}
