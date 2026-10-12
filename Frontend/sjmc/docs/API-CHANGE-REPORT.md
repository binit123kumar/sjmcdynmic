# API Change Report

## Overview
This document tracks all API endpoints, their authentication requirements, and purpose.

## API Endpoints

| ENDPOINT | METHOD | AUTH | PURPOSE | RESULT |
|----------|--------|------|---------|--------|
| /api/auth/login | POST | No | Authenticate admin, return JWT | Returns token, user info, expiresAt |
| /api/about | GET | No | List all about entries (public) | List of About objects |
| /api/about | GET | No | Filter active only | Filtered list |
| /api/about/{id} | GET | No | Get single about entry | About object |
| /api/about | POST | Yes (Bearer) | Create about entry with optional image | Created About object |
| /api/about/{id} | PUT | Yes (Bearer) | Update about entry with optional image | Updated About object |
| /api/about/{id} | DELETE | Yes (Bearer) | Delete about entry and image file | Success message |
| /api/about/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated About object |
| /api/faculty | GET | No | List all faculty (public) | List of Faculty objects |
| /api/faculty | GET | No | Filter active only | Filtered list |
| /api/faculty/{id} | GET | No | Get single faculty | Faculty object |
| /api/faculty | POST | Yes (Bearer) | Create faculty with optional photo | Created Faculty object |
| /api/faculty/{id} | PUT | Yes (Bearer) | Update faculty with optional photo | Updated Faculty object |
| /api/faculty/{id} | DELETE | Yes (Bearer) | Delete faculty and photo | Success message |
| /api/faculty/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated Faculty object |
| /api/staff | GET | No | List all staff (public) | List of Staff objects |
| /api/staff | GET | No | Filter active only | Filtered list |
| /api/staff/{id} | GET | No | Get single staff | Staff object |
| /api/staff | POST | Yes (Bearer) | Create staff with optional photo | Created Staff object |
| /api/staff/{id} | PUT | Yes (Bearer) | Update staff with optional photo | Updated Staff object |
| /api/staff/{id} | DELETE | Yes (Bearer) | Delete staff and photo | Success message |
| /api/staff/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated Staff object |
| /api/gallery | GET | No | List all gallery items with Media (public) | List of GalleryItem objects |
| /api/gallery | GET | No | Filter active only | Filtered list |
| /api/gallery/{id} | GET | No | Get single gallery item with Media | GalleryItem object |
| /api/gallery | POST | Yes (Bearer) | Create gallery item with image upload (auto WebP) | Created GalleryItem object |
| /api/gallery/{id} | PUT | Yes (Bearer) | Update gallery item with optional new image | Updated GalleryItem object |
| /api/gallery/{id} | DELETE | Yes (Bearer) | Delete gallery item and image file | Success message |
| /api/gallery/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated GalleryItem object |
| /api/news | GET | No | List all news (public) | List of NewsItem objects |
| /api/news | GET | No | Filter active only, ordered by PublishDate desc | Filtered list |
| /api/news/{id} | GET | No | Get single news | NewsItem object |
| /api/news | POST | Yes (Bearer) | Create news with optional image | Created NewsItem object |
| /api/news/{id} | PUT | Yes (Bearer) | Update news with optional new image | Updated NewsItem object |
| /api/news/{id} | DELETE | Yes (Bearer) | Delete news and image | Success message |
| /api/news/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated NewsItem object |
| /api/events | GET | No | List all events (public) | List of EventItem objects |
| /api/events | GET | No | Filter active only | Filtered list |
| /api/events/{id} | GET | No | Get single event | EventItem object |
| /api/events | POST | Yes (Bearer) | Create event with optional image | Created EventItem object |
| /api/events/{id} | PUT | Yes (Bearer) | Update event with optional new image | Updated EventItem object |
| /api/events/{id} | DELETE | Yes (Bearer) | Delete event and image | Success message |
| /api/events/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated EventItem object |
| /api/notice | GET | No | List all notices (public) | List of NoticeItem objects |
| /api/notice | GET | No | Filter active only | Filtered list |
| /api/notice/{id} | GET | No | Get single notice | NoticeItem object |
| /api/notice | POST | Yes (Bearer) | Create notice with optional file | Created NoticeItem object |
| /api/notice/{id} | PUT | Yes (Bearer) | Update notice with optional new file | Updated NoticeItem object |
| /api/notice/{id} | DELETE | Yes (Bearer) | Delete notice and file | Success message |
| /api/notice/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated NoticeItem object |
| /api/slider | GET | No | List all slider items (public) | List of SliderItem objects |
| /api/slider | GET | No | Filter active only | Filtered list |
| /api/slider/{id} | GET | No | Get single slider item | SliderItem object |
| /api/slider | POST | Yes (Bearer) | Create slider item with required image | Created SliderItem object |
| /api/slider/{id} | PUT | Yes (Bearer) | Update slider item with optional new image | Updated SliderItem object |
| /api/slider/{id} | DELETE | Yes (Bearer) | Delete slider item and image | Success message |
| /api/slider/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated SliderItem object |
| /api/courses | GET | No | List all courses (public) | List of Course objects |
| /api/courses | GET | No | Filter active only | Filtered list |
| /api/courses/{id} | GET | No | Get single course | Course object |
| /api/courses | POST | Yes (Bearer) | Create course with optional image | Created Course object |
| /api/courses/{id} | PUT | Yes (Bearer) | Update course with optional new image | Updated Course object |
| /api/courses/{id} | DELETE | Yes (Bearer) | Delete course and image | Success message |
| /api/courses/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated Course object |
| /api/downloads | GET | No | List all downloads (public) | List of DownloadItem objects |
| /api/downloads | GET | No | Filter active only | Filtered list |
| /api/downloads/{id} | GET | No | Get single download | DownloadItem object |
| /api/downloads | POST | Yes (Bearer) | Create download with required file | Created DownloadItem object |
| /api/downloads/{id} | PUT | Yes (Bearer) | Update download with optional new file | Updated DownloadItem object |
| /api/downloads/{id} | DELETE | Yes (Bearer) | Delete download and file | Success message |
| /api/downloads/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated DownloadItem object |
| /api/publications | GET | No | List all publications (public) | List of Publication objects |
| /api/publications | GET | No | Filter active only, ordered by PublishYear desc | Filtered list |
| /api/publications/{id} | GET | No | Get single publication | Publication object |
| /api/publications | POST | Yes (Bearer) | Create publication with optional file | Created Publication object |
| /api/publications/{id} | PUT | Yes (Bearer) | Update publication with optional new file | Updated Publication object |
| /api/publications/{id} | DELETE | Yes (Bearer) | Delete publication and file | Success message |
| /api/publications/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated Publication object |
| /api/media | GET | No | List all media files (public, filterable by category) | List of MediaFile objects |
| /api/media | POST | Yes (Bearer) | Upload media file (image/PDF/doc) | Created MediaFile object |
| /api/media/{id} | PUT | Yes (Bearer) | Update media metadata and optional new file | Updated MediaFile object |
| /api/media/{id} | DELETE | Yes (Bearer) | Delete media file and record | Success message |
| /api/contentpages | GET | No | List all content pages (public) | List of ContentPage objects |
| /api/contentpages | GET | No | Filter active only | Filtered list |
| /api/contentpages/{slug} | GET | No | Get page by slug (public, active only) | ContentPage object |
| /api/contentpages | POST | Yes (Bearer) | Create content page with optional cover image | Created ContentPage object |
| /api/contentpages/{id} | PUT | Yes (Bearer) | Update content page with optional new cover image | Updated ContentPage object |
| /api/contentpages/{id} | DELETE | Yes (Bearer) | Delete content page and cover image | Success message |
| /api/contentpages/{id}/toggle-status | PATCH | Yes (Bearer) | Toggle IsActive flag | Updated ContentPage object |
| /api/settings | GET | No | Get site settings (public) | SiteSetting object |
| /api/settings | PUT | Yes (Bearer) | Update site settings with optional logo | Updated SiteSetting object |
| /api/dashboard/counts | GET | Yes (Bearer) | Get counts for all modules (admin dashboard) | DashboardCountsDto object |

## Response Format
All endpoints return consistent `ApiResponse<T>` wrapper:
```json
{
  "success": true,
  "message": "Success message",
  "data": { ... }
}
```

Error responses:
```json
{
  "success": false,
  "message": "Error description",
  "data": null
}
```

## Authentication
- JWT Bearer token required for all write operations (POST, PUT, DELETE, PATCH)
- Token obtained via `/api/auth/login` with username/password
- Token includes claims: NameIdentifier, Name, Role, fullName
- Token expiry: configurable via `Jwt:ExpiryMinutes` (default 480 minutes)

## File Upload
- Multipart/form-data for all create/update with files
- Images auto-converted to WebP where applicable
- Max file size: 10MB (5MB for image-only sections)
- Allowed: JPG, JPEG, PNG, GIF, WEBP, PDF, DOC, DOCX
- Files served statically from `/uploads/{subfolder}/`

## CORS
Configured via `Cors:AllowedOrigins` in appsettings.json
Production: https://sjmcdynmic.vercel.app
Development: http://localhost:3000, http://localhost:5173, http://localhost:3001