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
    public class QuickLinkController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public QuickLinkController(ApplicationDbContext db) => _db = db;

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _db.QuickLinks
                .Where(x => x.IsActive)
                .OrderBy(x => x.DisplayOrder)
                .ToListAsync();
            return Ok(ApiResponse<object>.Ok(items));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _db.QuickLinks.FindAsync(id);
            if (item == null) return NotFound(ApiResponse<object>.Fail("QuickLink not found"));
            return Ok(ApiResponse<object>.Ok(item));
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create([FromBody] QuickLink item)
        {
            _db.QuickLinks.Add(item);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(item, "QuickLink created successfully"));
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Update(int id, [FromBody] QuickLink item)
        {
            var existing = await _db.QuickLinks.FindAsync(id);
            if (existing == null) return NotFound(ApiResponse<object>.Fail("QuickLink not found"));

            existing.Icon = item.Icon;
            existing.Title = item.Title;
            existing.Description = item.Description;
            existing.LinkUrl = item.LinkUrl;
            existing.DisplayOrder = item.DisplayOrder;
            existing.IsActive = item.IsActive;
            existing.UpdatedAt = DateTime.UtcNow;

            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(existing, "QuickLink updated successfully"));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _db.QuickLinks.FindAsync(id);
            if (item == null) return NotFound(ApiResponse<object>.Fail("QuickLink not found"));

            _db.QuickLinks.Remove(item);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(null, "QuickLink deleted successfully"));
        }
    }
}
