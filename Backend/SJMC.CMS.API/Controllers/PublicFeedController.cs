using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SJMC.CMS.API.Data;
using SJMC.CMS.API.Helpers;
using SJMC.CMS.API.Models;

namespace SJMC.CMS.API.Controllers
{
    [ApiController]
    [Route("api/v1/public-feed")]
    public class PublicFeedController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public PublicFeedController(ApplicationDbContext db) => _db = db;

        [HttpGet]
        public async Task<IActionResult> GetHomepageFeed()
        {
            var settings = await _db.SiteSettings.FirstOrDefaultAsync() ?? new SiteSetting();
            var quickLinks = await _db.QuickLinks.Where(x => x.IsActive).OrderBy(x => x.DisplayOrder).ToListAsync();
            var heroContent = await _db.HeroContents.Where(x => x.IsActive).OrderBy(x => x.DisplayOrder).FirstOrDefaultAsync();
            var siteStats = await _db.SiteStats.Where(x => x.IsActive).OrderBy(x => x.DisplayOrder).ToListAsync();
            var news = await _db.NewsItems.Where(x => x.IsActive).OrderByDescending(x => x.PublishDate).Take(6).ToListAsync();
            var events = await _db.EventItems.Where(x => x.IsActive).OrderBy(x => x.EventDate).Take(4).ToListAsync();
            var courses = await _db.Courses.Where(x => x.IsActive).OrderBy(x => x.DisplayOrder).ToListAsync();
            var about = await _db.Abouts.Where(x => x.IsActive && x.ShowOnHomePage).OrderBy(x => x.DisplayOrder).ToListAsync();
            var gallery = await _db.GalleryItems.Where(x => x.IsActive).OrderByDescending(x => x.UploadedDate).Take(12).ToListAsync();

            return Ok(ApiResponse<object>.Ok(new
            {
                settings,
                quickLinks,
                heroContent,
                siteStats,
                news,
                events,
                courses,
                about,
                gallery
            }));
        }
    }
}
