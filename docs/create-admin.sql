-- SJMC CMS - Admin User Creation Script
-- Run this SQL in your PostgreSQL database to create the first admin user.
-- Change the password hash below to your desired password (generate via BCrypt).

-- Generate a BCrypt hash for your password, then replace the hash below.
-- Example: for password 'Admin@123', the hash is shown.

INSERT INTO "AdminUsers" ("Username", "PasswordHash", "FullName", "Email", "Role", "CreatedAt")
VALUES (
    'admin',
    '$2b$11$OkpCsoEWbJIm4qtmgneViu1YanCYDPWpTaQRiQ6ELX2Ec4qO5aZFm',
    'Administrator',
    'admin@sjmc.edu',
    'Super Admin',
    NOW()
)
ON CONFLICT ("Username") DO NOTHING;

-- Verify the admin user was created:
-- SELECT "Id", "Username", "FullName", "Role" FROM "AdminUsers";
