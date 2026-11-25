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
        public DbSet<AdmissionApplication> AdmissionApplications => Set<AdmissionApplication>();

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

            // Seed HeroContent
            modelBuilder.Entity<HeroContent>().HasData(
                new HeroContent
                {
                    Id = 1,
                    Tagline = "Welcome to SJMC",
                    Pillars = "[\"Media\", \"Society\", \"Knowledge\", \"Responsible Communication\"]",
                    CtaButtons = "[{\"text\": \"Explore SJMC\", \"link\": \"#sjmc-about\", \"class\": \"sjmc-btn-orange\"}, {\"text\": \"Admission 2026\", \"link\": \"https://adms.akubihar.ac.in/\", \"class\": \"sjmc-btn-purple\"}]",
                    CampusImagePath = "/uploads/hero/home_slider_1.webp",
                    MediaStudioImagePath = "/uploads/hero/home_slider_2.webp",
                    DisplayOrder = 1,
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 1, 1)
                }
            );

            // Seed sample News
            modelBuilder.Entity<NewsItem>().HasData(
                new NewsItem
                {
                    Id = 1,
                    Title = "Admission Open for M.A. Journalism 2026",
                    Description = "SJMC Aryabhatta Knowledge University Patna announces admission for M.A. in Journalism and Mass Communication for the academic session 2026-28. Apply online through AKU admission portal.",
                    PublishDate = new DateTime(2024, 11, 20),
                    DisplayOrder = 1,
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 11, 20)
                },
                new NewsItem
                {
                    Id = 2,
                    Title = "Media Workshop on Digital Journalism",
                    Description = "A two-day workshop on Digital Journalism and New Media trends organized by SJMC in collaboration with leading media houses.",
                    PublishDate = new DateTime(2024, 11, 15),
                    DisplayOrder = 2,
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 11, 15)
                },
                new NewsItem
                {
                    Id = 3,
                    Title = "Guest Lecture by Senior Journalist",
                    Description = "Renowned journalist from national media house delivered guest lecture on 'Challenges in Modern Journalism' to SJMC students.",
                    PublishDate = new DateTime(2024, 11, 10),
                    DisplayOrder = 3,
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 11, 10)
                }
            );

            // Seed sample Events
            modelBuilder.Entity<EventItem>().HasData(
                new EventItem
                {
                    Id = 1,
                    Title = "Annual Media Festival 2026",
                    Description = "Join us for the annual media festival featuring competitions, workshops, and networking opportunities with industry professionals.",
                    EventDate = new DateTime(2024, 12, 15),
                    Venue = "SJMC Campus, AKU Patna",
                    DisplayOrder = 1,
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 11, 1)
                },
                new EventItem
                {
                    Id = 2,
                    Title = "Photography Exhibition",
                    Description = "Showcase of best photographs by SJMC students covering various themes from campus life to social issues.",
                    EventDate = new DateTime(2024, 12, 10),
                    Venue = "Media Center, SJMC",
                    DisplayOrder = 2,
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 11, 5)
                }
            );

            // Seed sample Courses
            modelBuilder.Entity<Course>().HasData(
                new Course
                {
                    Id = 1,
                    Name = "M.A. in Journalism and Mass Communication",
                    Description = "Two-year postgraduate program covering print, electronic, and digital media with practical training in reporting, editing, and production.",
                    Duration = "2 Years",
                    Eligibility = "Bachelor's degree in any discipline with 50% marks",
                    DisplayOrder = 1,
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 1, 1)
                },
                new Course
                {
                    Id = 2,
                    Name = "Ph.D. in Mass Communication",
                    Description = "Doctoral program for advanced research in media studies, communication theory, and journalism practices.",
                    Duration = "3-5 Years",
                    Eligibility = "Master's degree in Mass Communication with 55% marks",
                    DisplayOrder = 2,
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 1, 1)
                },
                new Course
                {
                    Id = 3,
                    Name = "PG Diploma in Digital Media",
                    Description = "One-year diploma program focusing on digital content creation, social media management, and online journalism.",
                    Duration = "1 Year",
                    Eligibility = "Bachelor's degree in any discipline",
                    DisplayOrder = 3,
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 1, 1)
                }
            );

            // Unique username
            modelBuilder.Entity<AdminUser>().HasIndex(u => u.Username).IsUnique();
            modelBuilder.Entity<ContentPage>().HasIndex(x => x.Slug).IsUnique();
        }
    }
}
