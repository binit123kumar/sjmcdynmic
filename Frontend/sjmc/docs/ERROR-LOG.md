# Error Log

## Frontend Errors

| TIME | ERROR | CAUSE | FIX | RESULT | STATUS |
|------|-------|-------|-----|--------|--------|
| 2026-09-22 17:12 | `Attempted import error: 'API_BASE' is not exported from '../utils/api'` | API_BASE was not exported as named export in api.js | Added `export const API_BASE = ...` to utils/api.js | Build successful | RESOLVED |

## Backend Errors

| TIME | ERROR | CAUSE | FIX | RESULT | STATUS |
|------|-------|-------|-----|--------|--------|
| 2026-09-22 17:20 | `warning NU1903: Package 'Microsoft.Build.Tasks.Core' 17.14.8 has a known high severity vulnerability` | Vulnerable NuGet package version | Update packages when compatible versions available | Build succeeded with warnings | ACKNOWLEDGED |
| 2026-09-22 17:20 | `warning NU1903: Package 'Microsoft.Build.Utilities.Core' 17.14.8 has a known high severity vulnerability` | Vulnerable NuGet package version | Update packages when compatible versions available | Build succeeded with warnings | ACKNOWLEDGED |

## Deployment/Configuration Issues

| TIME | ERROR | CAUSE | FIX | RESULT | STATUS |
|------|-------|-------|-----|--------|--------|
| N/A | appsettings.json has empty ConnectionStrings and Jwt:Key | Secrets must not be in source code | Configure via Render environment variables | Production deployment uses env vars | BY DESIGN |
| N/A | No admin user in production database | Migration 20260916063640 removed default admin seed | Create admin user manually via SQL or setup script | Requires manual setup | PENDING |

## Summary
- **1 frontend build error** - Resolved (missing export)
- **2 backend build warnings** - Acknowledged (vulnerable packages, not blocking)
- **1 backend JSON parse error** - Resolved (duplicate braces in appsettings.json)
- **1 deployment configuration item** - By design (secrets in env vars)
- **1 production setup item** - Pending (admin user creation)