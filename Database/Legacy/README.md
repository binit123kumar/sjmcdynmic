# Legacy SQL Scripts

**IMPORTANT: Do not run these scripts.**

EF Core migrations are the single source of truth for the database schema.

These scripts are archived here for reference only. The database is managed through:
- `dotnet ef migrations add` - to create new migrations
- `dotnet ef database update` - to apply migrations to the database

The SQL Server database schema is automatically created and updated by EF Core based on the entity models in `Backend/SJMC.CMS.API/Models/Entities.cs`.
