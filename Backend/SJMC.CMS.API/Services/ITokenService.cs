using SJMC.CMS.API.Models;

namespace SJMC.CMS.API.Services
{
    public interface ITokenService
    {
        (string token, DateTime expiresAt) GenerateToken(AdminUser user);
    }
}
