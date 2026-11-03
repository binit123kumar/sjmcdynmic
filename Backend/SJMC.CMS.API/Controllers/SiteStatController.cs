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
    public class SiteStatController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public SiteStatController(ApplicationDbContext db) => _db = db;

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _db.SiteStats
                .Where(x => x.IsActive)
                .OrderBy(x => x.DisplayOrder)
                .ToListAsync();
            return Ok(ApiResponse<object>.Ok(items));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _db.SiteStats.FindAsync(id);
            if (item == null) return NotFound(ApiResponse<object>.Fail("SiteStat not found"));
            return Ok(ApiResponse<object>.Ok(item));
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create([FromBody] SiteStat item)
        {
            _db.SiteStats.Add(item);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(item, "SiteStat created successfully"));
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Update(int id, [FromBody] SiteStat item)
        {
            var existing = await _db.SiteStats.FindAsync(id);
            if (existing == null) return NotFound(ApiResponse<object>.Fail("SiteStat not found"));

            existing.Label = item.Label;
            existing.Value = item.Value;
            existing.IconName = item.IconName;
            existing.DisplayOrder = item.DisplayOrder;
            existing.IsActive = item.IsActive;
            existing.UpdatedAt = DateTime.UtcNow;

            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(existing, "SiteStat updated successfully"));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _db.SiteStats.FindAsync(id);
            if (item == null) return NotFound(ApiResponse<object>.Fail("SiteStat not found"));

            _db.SiteStats.Remove(item);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(null, "SiteStat deleted successfully"));
        }
    }
}
