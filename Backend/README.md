# SJMC CMS — Backend (ASP.NET Core 10 Web API + EF Core + SQL Server)

Complete backend for SJMC CMS (About, Faculty, Staff, Gallery, News, Events, Notice, Slider, Courses,
Downloads, Publications, Settings, ContentPages, Media) with full CRUD operations.

## Database Setup

### 1. Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- SQL Server (Express/Developer/full) or SQL Server LocalDB
- Visual Studio 2022 / VS Code / Rider

### 2. Configure Connection String

The committed `appsettings.json` contains only placeholders. Set your actual connection string using user secrets:

```bash
cd SJMC.CMS.API
dotnet user-secrets init
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Server=localhost\\SQLEXPRESS;Database=SJMC_CMS_DB;Trusted_Connection=True;TrustServerCertificate=True;"
```

**SQL Express:**
```
Server=localhost\SQLEXPRESS;Database=SJMC_CMS_DB;Trusted_Connection=True;TrustServerCertificate=True;
```

**LocalDB:**
```
Server=(localdb)\mssqllocaldb;Database=SJMC_CMS_DB;Trusted_Connection=True;TrustServerCertificate=True;
```

**Full SQL Server with username/password:**
```
Server=localhost;Database=SJMC_CMS_DB;User Id=sa;Password=YourPassword;TrustServerCertificate=True;
```

### 3. Create Database and Apply Migrations

```bash
cd SJMC.CMS.API
dotnet restore
dotnet tool install --global dotnet-ef   # if not already installed
dotnet ef migrations add InitialCreate
dotnet ef database update
```

This will create all tables in SQL Server.

### 4. Create Admin User

Run the admin setup tool to create the initial admin user:

```bash
cd SJMC.CMS.API
dotnet run --project Tools/AdminSetup.csproj --connection "Server=localhost\\SQLEXPRESS;Database=SJMC_CMS_DB;Trusted_Connection=True;TrustServerCertificate=True;" --username admin --password YourSecurePassword123! --email admin@sjmc.edu
```

Or call `AdminSetup.RunAsync()` programmatically with your connection string and desired credentials.

**Note:** The admin user is created at runtime with your chosen password. No default password is stored in the repository.

### 5. Run the Application

```bash
cd SJMC.CMS.API
dotnet run
```

Swagger UI will be available at: `https://localhost:7050/swagger`

## Authentication

Login via `POST /api/auth/login` with your admin credentials to get a JWT token. Use the token in the `Authorization: Bearer <token>` header for all protected endpoints.

## API Endpoints

All modules follow the same pattern:

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/api/{module}` | No | List all (supports `?activeOnly=true`) |
| GET | `/api/{module}/{id}` | No | Get single record |
| POST | `/api/{module}` | Yes | Create (multipart/form-data with file upload) |
| PUT | `/api/{module}/{id}` | Yes | Update |
| DELETE | `/api/{module}/{id}` | Yes | Delete |
| PATCH | `/api/{module}/{id}/toggle-status` | Yes | Toggle active/inactive |

Modules: `about`, `faculty`, `staff`, `gallery`, `news`, `events`, `notice`, `slider`, `courses`, `downloads`, `publications`, `contentpages`, `media`

Additional endpoints:
- `GET /api/dashboard/counts` - Dashboard statistics
- `GET /api/settings` / `PUT /api/settings` - Site settings singleton

## File Uploads

Files are saved to `wwwroot/uploads/{module}/` and returned as relative paths (e.g., `/uploads/about/xyz.jpg`).

## Project Structure

```
SJMC.CMS.API/
  Controllers/           -> All API controllers
  Models/Entities.cs      -> EF Core entities
  Data/ApplicationDbContext.cs
  Services/               -> JWT TokenService, FileService
  Program.cs              -> App configuration
  Tools/AdminSetup.cs     -> Admin user creation tool
Migrations_Postgres_Backup/ -> Old PostgreSQL migrations (archived)
```
