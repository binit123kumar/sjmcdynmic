using Microsoft.EntityFrameworkCore;
using SJMC.CMS.API.Models;

namespace SJMC.CMS.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<About> Abouts => Set<About>();
        public DbSet<Faculty> Faculties => Set<Faculty>();
        public DbSet<Staff> Staffs => Set<Staff>();
        public DbSet<GalleryItem> GalleryItems => Set<GalleryItem>();
        public DbSet<NewsItem> NewsItems => Set<NewsItem>();
        public DbSet<EventItem> EventItems => Set<EventItem>();
        public DbSet<NoticeItem> NoticeItems => Set<NoticeItem>();
        public DbSet<SliderItem> SliderItems => Set<SliderItem>();
        public DbSet<Course> Courses => Set<Course>();
        public DbSet<DownloadItem> DownloadItems => Set<DownloadItem>();
        public DbSet<Publication> Publications => Set<Publication>();
        public DbSet<SiteSetting> SiteSettings => Set<SiteSetting>();
        public DbSet<ContentPage> ContentPages => Set<ContentPage>();
        public DbSet<MediaFile> MediaFiles => Set<MediaFile>();
        public DbSet<AdminUser> AdminUsers => Set<AdminUser>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<SiteSetting>().HasData(new SiteSetting
            {
                Id = 1,
                SiteName = "SJMC",
                Address = "",
                Phone = "",
                Email = "",
                MetaTitle = "SJMC - School of Journalism and Mass Communication"
            });

            // Unique username
            modelBuilder.Entity<AdminUser>().HasIndex(u => u.Username).IsUnique();
            modelBuilder.Entity<ContentPage>().HasIndex(x => x.Slug).IsUnique();
        }
    }
}
