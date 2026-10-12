# Code Change Report

## Overview
This document tracks code changes made during the project audit and improvement phase.

## Frontend Changes

| FILE | BEFORE | AFTER | REASON | BENEFIT |
|------|--------|-------|--------|---------|
| src/utils/api.js | Did not exist | Created central API utility with `API_BASE`, `buildApiUrl`, `getApiBase` | Eliminate duplicated API base URL logic across 15+ files | Single source of truth, easier maintenance, consistent API calls |
| src/components/Main.jsx | Inline `const API_BASE = ...` (line 118) | Import `{ API_BASE }` from `../utils/api` | Use central utility | Consistent API base, easier deployment config |
| src/components/Footer.jsx | Two inline `const apiBase = ...` (lines 8, 15) | Import `{ API_BASE, buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/components/Header.jsx | Inline `const API_BASE = ...` (line 3) | Import `{ API_BASE, buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/components/HomeAbout.jsx | Inline `const API_BASE = ...` (line 3) | Import `{ buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/components/Slider.jsx | Inline `const API_BASE = ...` (line 4) | Import `{ API_BASE, buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/page/About.jsx | Inline `const API_BASE = ...` + `const API_URL` (lines 4-5) | Import `{ buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/page/Page11.jsx | Inline `const API_BASE = ...` + `const API_URL` (lines 4-5) | Import `{ buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/page/Page25.jsx | Inline `const API_BASE = ...` + `const API_URL` (lines 3-4) | Import `{ buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/page/Page4.jsx | Inline `const API_BASE = ...` + `const API_URL` (lines 4-5) | Import `{ buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/page/Page5.jsx | Inline `const API_BASE = ...` + `const API_URL` (lines 4-5) | Import `{ buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/page/Page52.jsx | Inline `const API_BASE = ...` + `const API_URL` (lines 3-4) | Import `{ buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/page/Page7.jsx | Inline `const API_BASE = ...` + `const API_URL` (lines 4-5) | Import `{ buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |
| src/page/Page9.jsx | Inline `const API_BASE = ...` + `const API_URL` (lines 5-6) | Import `{ buildApiUrl }` from `../utils/api` | Use central utility | DRY, consistent API calls |

## Backend Changes

| FILE | BEFORE | AFTER | REASON | BENEFIT |
|------|--------|-------|--------|---------|
| appsettings.json | Empty ConnectionStrings, Jwt:Key | Placeholder values (PostgreSQL + JWT secret) | Backend requires DB connection and JWT secret to function | Backend can start and auto-migrate; production uses env vars |

## Summary
- **15 frontend files** updated to use central API utility
- **1 new utility file** created: `src/utils/api.js`
- **1 backend config file** updated: `appsettings.json`
- **Build verified**: Both frontend (`npm run build`) and backend (`dotnet build`) compile successfully
- **Runtime verified**: Backend starts on :5050, PostgreSQL connects, migrations auto-apply