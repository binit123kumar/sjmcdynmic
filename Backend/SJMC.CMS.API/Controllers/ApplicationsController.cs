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
    public class ApplicationsController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public ApplicationsController(ApplicationDbContext db) => _db = db;

        // Public endpoint for admission form submission
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AdmissionApplicationDto dto)
        {
            var entity = new AdmissionApplication
            {
                FullName = dto.FullName,
                FatherName = dto.FatherName,
                MotherName = dto.MotherName,
                Phone = dto.Phone,
                Email = dto.Email,
                Address = dto.Address,
                Course = dto.Course,
                Qualification = dto.Qualification,
                DateOfBirth = dto.DateOfBirth,
                Gender = dto.Gender,
                Message = dto.Message,
                Status = "Pending",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            };

            _db.AdmissionApplications.Add(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<AdmissionApplication>.Ok(entity, "Application submitted successfully."));
        }

        // Admin endpoints
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAll([FromQuery] string? status = null)
        {
            var query = _db.AdmissionApplications.AsQueryable();
            if (!string.IsNullOrEmpty(status))
                query = query.Where(x => x.Status == status);
            return Ok(ApiResponse<List<AdmissionApplication>>.Ok(await query.OrderByDescending(x => x.CreatedAt).ToListAsync()));
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _db.AdmissionApplications.FindAsync(id);
            if (item == null) return NotFound(ApiResponse<object>.Fail("Application not found"));
            return Ok(ApiResponse<AdmissionApplication>.Ok(item));
        }

        [HttpPut("{id}/status")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateStatusDto dto)
        {
            var entity = await _db.AdmissionApplications.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Application not found"));

            entity.Status = dto.Status;
            entity.AdminRemarks = dto.AdminRemarks;
            entity.UpdatedAt = DateTime.UtcNow;

            await _db.SaveChangesAsync();
            return Ok(ApiResponse<AdmissionApplication>.Ok(entity, "Application status updated successfully."));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var entity = await _db.AdmissionApplications.FindAsync(id);
            if (entity == null) return NotFound(ApiResponse<object>.Fail("Application not found"));

            _db.AdmissionApplications.Remove(entity);
            await _db.SaveChangesAsync();
            return Ok(ApiResponse<object>.Ok(null, "Application deleted successfully."));
        }
    }

    public class AdmissionApplicationDto
    {
        public string FullName { get; set; } = string.Empty;
        public string? FatherName { get; set; }
        public string? MotherName { get; set; }
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string? Address { get; set; }
        public string? Course { get; set; }
        public string? Qualification { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? Gender { get; set; }
        public string? Message { get; set; }
    }

    public class UpdateStatusDto
    {
        public string Status { get; set; } = "Pending";
        public string? AdminRemarks { get; set; }
    }
}
