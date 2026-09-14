using System.ComponentModel.DataAnnotations;

namespace SJMC.CMS.API.Models
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public int DisplayOrder { get; set; } = 1;
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
    }

    public class About : BaseEntity
    {
        [Required, MaxLength(200)] public string Title { get; set; } = string.Empty;
        [Required] public string Description { get; set; } = string.Empty;
        public string? ImagePath { get; set; }
        public bool ShowOnHomePage { get; set; }
        public bool ShowOnAboutPage { get; set; } = true;
        public bool ShowOnFooter { get; set; }
        public bool ShowOnVisionMission { get; set; }
        public bool ShowOnRoleOfSJMC { get; set; }
        public bool ShowOnFounderDirector { get; set; }
        public bool ShowOnCareers { get; set; }
    }

    public class Faculty : BaseEntity
    {
        [Required, MaxLength(150)] public string Name { get; set; } = string.Empty;
        [MaxLength(150)] public string? Designation { get; set; }
        [MaxLength(250)] public string? Qualification { get; set; }
        [MaxLength(150)] public string? Email { get; set; }
        [MaxLength(20)] public string? Phone { get; set; }
        public string? Bio { get; set; }
        public string? PhotoPath { get; set; }
        public bool ShowOnFacultyPage { get; set; } = true;
        public bool ShowOnGuestFaculty { get; set; }
        public bool ShowOnConsultant { get; set; }
    }

    public class Staff : BaseEntity
    {
        [Required, MaxLength(150)] public string Name { get; set; } = string.Empty;
        [MaxLength(150)] public string? Designation { get; set; }
        [MaxLength(150)] public string? Email { get; set; }
        [MaxLength(20)] public string? Phone { get; set; }
        public string? PhotoPath { get; set; }
    }

    public class GalleryItem : BaseEntity
    {
        [Required, MaxLength(200)] public string Title { get; set; } = string.Empty;
        [Required] public string ImagePath { get; set; } = string.Empty;
	public int? MediaId { get; set; }
	public MediaFile? Media { get; set; }
        [MaxLength(100)] public string? Category { get; set; }
        [MaxLength(255)] public string? OriginalFileName { get; set; }
        [MaxLength(255)] public string? StoredFileName { get; set; }
        [MaxLength(500)] public string? AltText { get; set; }
        public string? Description { get; set; }
        [MaxLength(300)] public string? LinkUrl { get; set; }
        public DateTime UploadedDate { get; set; } = DateTime.UtcNow;
    }

    public class NewsItem : BaseEntity
    {
        [Required, MaxLength(250)] public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? ImagePath { get; set; }
        public DateTime PublishDate { get; set; } = DateTime.UtcNow;
    }

    public class EventItem : BaseEntity
    {
        [Required, MaxLength(250)] public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime EventDate { get; set; } = DateTime.UtcNow;
        [MaxLength(200)] public string? Venue { get; set; }
        public string? ImagePath { get; set; }
    }

    public class NoticeItem : BaseEntity
    {
        [Required, MaxLength(250)] public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? FilePath { get; set; }
        public DateTime NoticeDate { get; set; } = DateTime.UtcNow;
    }

    public class SliderItem : BaseEntity
    {
        [MaxLength(200)] public string? Title { get; set; }
        [Required] public string ImagePath { get; set; } = string.Empty;
        [MaxLength(300)] public string? LinkUrl { get; set; }
    }

    public class Course : BaseEntity
    {
        [Required, MaxLength(200)] public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        [MaxLength(100)] public string? Duration { get; set; }
        [MaxLength(250)] public string? Eligibility { get; set; }
        public string? ImagePath { get; set; }
    }

    public class DownloadItem : BaseEntity
    {
        [Required, MaxLength(200)] public string Title { get; set; } = string.Empty;
        [Required] public string FilePath { get; set; } = string.Empty;
        [MaxLength(100)] public string? Category { get; set; }
    }

    public class Publication : BaseEntity
    {
        [Required, MaxLength(250)] public string Title { get; set; } = string.Empty;
        [MaxLength(200)] public string? Author { get; set; }
        public string? Description { get; set; }
        public string? FilePath { get; set; }
        public int? PublishYear { get; set; }
    }

    public class SiteSetting
    {
        [Key] public int Id { get; set; }
        [MaxLength(150)] public string SiteName { get; set; } = "SJMC";
        public string? LogoPath { get; set; }
        [MaxLength(300)] public string? Address { get; set; }
        [MaxLength(20)] public string? Phone { get; set; }
        [MaxLength(150)] public string? Email { get; set; }
        public string? Facebook { get; set; }
        public string? Twitter { get; set; }
        public string? Instagram { get; set; }
        public string? YouTube { get; set; }
        [MaxLength(200)] public string? MetaTitle { get; set; }
        public string? MetaDescription { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class ContentPage : BaseEntity
    {
        [Required, MaxLength(120)] public string Slug { get; set; } = string.Empty;
        [Required, MaxLength(250)] public string Title { get; set; } = string.Empty;
        [Required] public string Body { get; set; } = string.Empty;
        [MaxLength(100)] public string? Category { get; set; }
        [MaxLength(500)] public string? Excerpt { get; set; }
        [MaxLength(200)] public string? MetaTitle { get; set; }
        public string? MetaDescription { get; set; }
        public string? CoverImagePath { get; set; }
        [MaxLength(500)] public string? CoverAltText { get; set; }
    }

    public class MediaFile : BaseEntity
    {
        [Required, MaxLength(255)] public string FileName { get; set; } = string.Empty;
        [Required, MaxLength(255)] public string StoredFileName { get; set; } = string.Empty;
        [Required, MaxLength(30)] public string FileType { get; set; } = string.Empty;
        [Required] public string FilePath { get; set; } = string.Empty;
        [Required, MaxLength(250)] public string Title { get; set; } = string.Empty;
        [MaxLength(500)] public string? AltText { get; set; }
        public string? Description { get; set; }
        [MaxLength(100)] public string? Category { get; set; }
        public long FileSize { get; set; }
        public DateTime UploadedDate { get; set; } = DateTime.UtcNow;
    }

    public class AdminUser
    {
        [Key] public int Id { get; set; }
        [Required, MaxLength(100)] public string Username { get; set; } = string.Empty;
        [Required] public string PasswordHash { get; set; } = string.Empty;
        [MaxLength(150)] public string FullName { get; set; } = string.Empty;
        [MaxLength(150)] public string? Email { get; set; }
        [MaxLength(50)] public string Role { get; set; } = "Super Admin";
        public DateTime? LastLogin { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}