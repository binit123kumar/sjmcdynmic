using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    }
}
