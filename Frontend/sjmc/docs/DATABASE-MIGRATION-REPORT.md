# Database Migration Report

## Overview
This document tracks the database schema changes for the SJMC Dynamic CMS project.

## Current Database State (PostgreSQL on Render)

### Tables (DbSets in ApplicationDbContext)
| Table | Entity | Description |
|-------|--------|-------------|
| AdminUsers | AdminUser | Administrator accounts with BCrypt password hashing |
| Abouts | About | About section content with display flags for various pages |
| Faculties | Faculty | Faculty members with designations, qualifications, and page display flags |
| Staffs | Staff | Staff members |
| GalleryItems | GalleryItem | Gallery images with metadata, alt text, categories |
| NewsItems | NewsItem | News articles with publish dates |
| EventItems | EventItem | Events with dates, venues |
| NoticeItems | NoticeItem | Notices with optional file attachments |
| SliderItems | SliderItem | Homepage slider images with optional links |
| Courses | Course | Academic courses/programs |
| DownloadItems | DownloadItem | Downloadable files with categories |
| Publications | Publication | Academic publications with authors and years |
| SiteSettings | SiteSetting | Single-row site configuration (logo, contact, social media, SEO) |
| ContentPages | ContentPage | Dynamic content pages with slugs, rich text body, SEO |
| MediaFiles | MediaFile | Media library for images, PDFs, documents |

### Key Features
- All entities inherit from `BaseEntity` (Id, DisplayOrder, IsActive, CreatedAt, UpdatedAt)
- `AdminUser` has unique username index and BCrypt password hashing
- `ContentPage` has unique slug index
- `GalleryItem` has optional relation to `MediaFile`
- PostgreSQL-specific: IdentityByDefaultColumn for auto-increment

### Migrations Applied
| Migration | Date | Description |
|-----------|------|-------------|
| 20260904172225_AddGalleryMetadata | 2026-09-04 | Initial schema with all tables + admin seed (password: Admin@123) + site settings seed |
| 20260904181659_AddContentPages | 2026-09-04 | Added ContentPages table |
| 20260904182655_AddMediaLibrary | 2026-09-04 | Added MediaFiles table |
| 20260906100325_AddGalleryMediaRelation | 2026-09-06 | Added MediaId foreign key to GalleryItems |
| 20260916063640_RemoveDefaultAdminSeed | 2026-09-16 | Removed default admin seed (security best practice) |

### Security Notes
- Default admin user (username: `admin`, password: `Admin@123`) was seeded in initial migration
- Migration `20260916063640_RemoveDefaultAdminSeed` removed the seed data
- **Production must create admin user manually or via secure setup script**
- JWT secret and database connection string must be set via environment variables on Render
- No secrets in source code

## Migration History Table

| BEFORE | AFTER | REASON | BENEFIT |
|--------|-------|--------|---------|
| No database | Full schema (15 tables) | Initial project setup | Complete CMS data model |
| No ContentPages | ContentPages table added | Dynamic page support | Flexible content management |
| No MediaFiles | MediaFiles table added | Centralized media library | Reusable media across modules |
| GalleryItems no Media relation | MediaId FK added | Link gallery to media library | Better media management |
| Admin seed in migration | Admin seed removed | Security - no default credentials in code | Prevents credential exposure |