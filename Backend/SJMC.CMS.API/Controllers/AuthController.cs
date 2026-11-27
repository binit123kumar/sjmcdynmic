using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using SJMC.CMS.API.Data;
using SJMC.CMS.API.DTOs;
using SJMC.CMS.API.Helpers;
using SJMC.CMS.API.Services;

namespace SJMC.CMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly ITokenService _tokenService;

        public AuthController(ApplicationDbContext db, ITokenService tokenService)
        {
            _db = db;
            _tokenService = tokenService;
        }

        // POST api/auth/login
        // Authenticate administrator using the BCrypt password hash stored in the database.
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto request)
        {
            var user = await _db.AdminUsers.FirstOrDefaultAsync(u => u.Username == request.Username);
            if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
                return Unauthorized(ApiResponse<object>.Fail("Invalid username or password."));

            var (token, expiresAt) = _tokenService.GenerateToken(user);

            user.LastLogin = DateTime.UtcNow;
            await _db.SaveChangesAsync();

            var response = new LoginResponseDto
            {
                Token = token,
                Username = user.Username,
                FullName = user.FullName,
                Role = user.Role,
                ExpiresAt = expiresAt
            };

            return Ok(ApiResponse<LoginResponseDto>.Ok(response, "Login successful."));
        }

        [Authorize]
        [HttpPost("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequestDto request)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier)
                ?? User.FindFirstValue("sub")
                ?? User.FindFirstValue("nameid");

            if (!int.TryParse(userId, out var id))
                return Unauthorized(ApiResponse<object>.Fail("Invalid authentication token."));

            var user = await _db.AdminUsers.FirstOrDefaultAsync(u => u.Id == id);
            if (user == null)
                return Unauthorized(ApiResponse<object>.Fail("Invalid authentication token."));

            if (string.IsNullOrWhiteSpace(request.CurrentPassword)
                || !BCrypt.Net.BCrypt.Verify(request.CurrentPassword, user.PasswordHash))
                return BadRequest(ApiResponse<object>.Fail("Current password is incorrect."));

            if (string.IsNullOrWhiteSpace(request.NewPassword) || request.NewPassword.Length < 8)
                return BadRequest(ApiResponse<object>.Fail("New password must be at least 8 characters."));

            if (BCrypt.Net.BCrypt.Verify(request.NewPassword, user.PasswordHash))
                return BadRequest(ApiResponse<object>.Fail("New password must be different from the current password."));

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.NewPassword);
            await _db.SaveChangesAsync();

            return Ok(ApiResponse<object>.Ok(new { }, "Password changed successfully."));
        }
    }
}
