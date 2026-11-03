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
        public DbSet<QuickLink> QuickLinks => Set<QuickLink>();
        public DbSet<HeroContent> HeroContents => Set<HeroContent>();
        public DbSet<SiteStat> SiteStats => Set<SiteStat>();

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
                MetaTitle = "SJMC - School of Journalism and Mass Communication",
                UpdatedAt = new DateTime(2024, 1, 1)
            });

            // Seed QuickLinks
            modelBuilder.Entity<QuickLink>().HasData(
                new QuickLink { Id = 1, Icon = "fa-graduation-cap", Title = "Admissions", Description = "Apply Online", LinkUrl = "/upcomingEvents", DisplayOrder = 1, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) },
                new QuickLink { Id = 2, Icon = "fa-calendar", Title = "Academic Calendar", Description = "View Schedule", LinkUrl = "/upcomingEvents", DisplayOrder = 2, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) },
                new QuickLink { Id = 3, Icon = "fa-edit", Title = "Examinations", Description = "Results & Notices", LinkUrl = "/upcomingEvents", DisplayOrder = 3, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) },
                new QuickLink { Id = 4, Icon = "fa-user-circle", Title = "Student Portal", Description = "Login", LinkUrl = "/admin/login", DisplayOrder = 4, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) },
                new QuickLink { Id = 5, Icon = "fa-book", Title = "Library", Description = "Digital Resources", LinkUrl = "/Library", DisplayOrder = 5, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) },
                new QuickLink { Id = 6, Icon = "fa-newspaper-o", Title = "News & Events", Description = "Latest Updates", LinkUrl = "/upcomingEvents", DisplayOrder = 6, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) }
            );

            // Seed SiteStats
            modelBuilder.Entity<SiteStat>().HasData(
                new SiteStat { Id = 1, Label = "50+ Years", Value = "50+", IconName = "fa-history", DisplayOrder = 1, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) },
                new SiteStat { Id = 2, Label = "15+ Programmes", Value = "15+", IconName = "fa-graduation-cap", DisplayOrder = 2, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) },
                new SiteStat { Id = 3, Label = "5000+ Students", Value = "5000+", IconName = "fa-users", DisplayOrder = 3, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) },
                new SiteStat { Id = 4, Label = "100+ Faculty", Value = "100+", IconName = "fa-chalkboard-teacher", DisplayOrder = 4, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) },
                new SiteStat { Id = 5, Label = "100% Quality", Value = "100%", IconName = "fa-star", DisplayOrder = 5, IsActive = true, CreatedAt = new DateTime(2024, 1, 1) }
            );

            // Unique username
            modelBuilder.Entity<AdminUser>().HasIndex(u => u.Username).IsUnique();
            modelBuilder.Entity<ContentPage>().HasIndex(x => x.Slug).IsUnique();
        }
    }
}
