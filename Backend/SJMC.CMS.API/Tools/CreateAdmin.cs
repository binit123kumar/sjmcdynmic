using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SJMC.CMS.API.Data;
using SJMC.CMS.API.Models;

namespace SJMC.CMS.API.Tools
{
    public static class CreateAdmin
    {
        private const int MinPasswordLength = 10;

        public static async Task RunAsync(string connectionString)
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseSqlServer(connectionString)
                .Options;

            using var db = new ApplicationDbContext(options);

            if (!await db.Database.CanConnectAsync())
            {
                Console.WriteLine("Cannot connect to the database. Check the connection string.");
                return;
            }

            var pendingMigrations = await db.Database.GetPendingMigrationsAsync();
            if (pendingMigrations.GetEnumerator().MoveNext())
            {
                Console.WriteLine("Database is not up to date. Run: dotnet ef database update");
                return;
            }

            Console.Write("Admin username: ");
            var username = Console.ReadLine()?.Trim();
            if (string.IsNullOrWhiteSpace(username))
            {
                Console.WriteLine("Username is required.");
                return;
            }

            if (await db.AdminUsers.AnyAsync(u => u.Username == username))
            {
                Console.WriteLine($"Admin user '{username}' already exists. No changes made.");
                return;
            }

            Console.Write("Admin email: ");
            var email = Console.ReadLine()?.Trim();

            var password = ReadHiddenInput("Password (min 10 characters): ");
            var confirmPassword = ReadHiddenInput("Confirm password: ");

            if (password.Length < MinPasswordLength)
            {
                Console.WriteLine($"Password must be at least {MinPasswordLength} characters.");
                return;
            }

            if (password != confirmPassword)
            {
                Console.WriteLine("Passwords do not match.");
                return;
            }

            var adminUser = new AdminUser
            {
                Username = username,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(password),
                FullName = "Administrator",
                Email = email,
                Role = "Admin",
                CreatedAt = DateTime.UtcNow
            };

            db.AdminUsers.Add(adminUser);
            await db.SaveChangesAsync();

            Console.WriteLine($"Admin user '{username}' created successfully.");
        }

        private static string ReadHiddenInput(string prompt)
        {
            Console.Write(prompt);
            var input = new StringBuilder();

            while (true)
            {
                var key = Console.ReadKey(intercept: true);

                if (key.Key == ConsoleKey.Enter)
                {
                    Console.WriteLine();
                    return input.ToString();
                }

                if (key.Key == ConsoleKey.Backspace)
                {
                    if (input.Length > 0) input.Length--;
                    continue;
                }

                input.Append(key.KeyChar);
            }
        }
    }
}