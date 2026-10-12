# Deployment Report

## Overview
This document tracks the deployment status of the SJMC CMS across all environments.

## Build Results

| Component | Command | Result | Duration |
|-----------|---------|--------|----------|
| Frontend | `npm run build` | PASS | ~30s |
| Backend | `dotnet build` | PASS (4 warnings) | ~13s |

## Deployment Targets

| Service | URL | Status | Platform |
|---------|-----|--------|----------|
| Frontend | https://sjmcdynmic.vercel.app | Configured | Vercel |
| Backend | https://sjmc-cms-api.onrender.com | Configured | Render |
| Database | Render PostgreSQL | Configured | Render |

## Environment Variables

### Frontend (.env)
| Variable | Value | Status |
|----------|-------|--------|
| REACT_APP_API_URL | https://sjmc-cms-api.onrender.com/api | Set |

### Backend (Render Config Vars)
| Variable | Status |
|----------|--------|
| ConnectionStrings:DefaultConnection | Set via Render UI |
| Jwt:Key | Set via Render UI |
| Jwt:Issuer | SJMC.CMS.API (default) |
| Jwt:Audience | SJMC.CMS.Client (default) |
| Cors:AllowedOrigins | Includes localhost + production |

## CORS Configuration

| Origin | Status |
|--------|--------|
| http://localhost:3000 | Allowed (dev) |
| http://localhost:5173 | Allowed (dev) |
| http://localhost:3001 | Allowed (dev) |
| https://sjmcdynmic.vercel.app | Allowed (production) |

## Deployment Checklist

| Item | Status | Notes |
|------|--------|-------|
| Frontend build PASS | ✅ | npm run build successful |
| Backend build PASS | ✅ | dotnet build successful |
| Database connection | CONFIGURED | PostgreSQL on Render |
| JWT secret set | CONFIGURED | Via Render env vars |
| Admin user created | PENDING | Must be created manually in DB |
| Production API tested | PENDING | Requires live deployment |
| CORS verified | PENDING | Requires live deployment |
| Login flow tested | PENDING | Requires admin user |

## Deployment Steps

### Frontend (Vercel)
1. Push code to connected Git repository
2. Vercel auto-builds on push
3. Build output: `build/` folder
4. Deployed to: https://sjmcdynmic.vercel.app

### Backend (Render)
1. Push code to connected Git repository
2. Render auto-builds on push
3. `dotnet restore` → `dotnet build` → `dotnet publish`
4. Environment variables set in Render dashboard
5. Deployed to: https://sjmc-cms-api.onrender.com

### Database (Render PostgreSQL)
1. Created via Render dashboard
2. Migrations auto-applied on startup (`db.Database.Migrate()`)
3. Connection string set via Render env vars

## Known Issues

| Issue | Impact | Resolution |
|-------|--------|------------|
| Admin user not seeded in production | Cannot login | Create manually via SQL or setup script |
| WebP conversion not implemented | Images served as original format | Implement in FileService |
| PDF compression not implemented | Large PDF files | Implement in FileService |
| No startup script for admin creation | First admin must be created manually | Add setup script or SQL |
