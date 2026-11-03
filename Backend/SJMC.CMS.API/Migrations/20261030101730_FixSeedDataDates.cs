using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SJMC.CMS.API.Migrations
{
    /// <inheritdoc />
    public partial class FixSeedDataDates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "QuickLinks",
                columns: new[] { "Id", "CreatedAt", "Description", "DisplayOrder", "Icon", "IsActive", "LinkUrl", "Title", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Apply Online", 1, "fa-graduation-cap", true, "/upcomingEvents", "Admissions", null },
                    { 2, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "View Schedule", 2, "fa-calendar", true, "/upcomingEvents", "Academic Calendar", null },
                    { 3, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Results & Notices", 3, "fa-edit", true, "/upcomingEvents", "Examinations", null },
                    { 4, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Login", 4, "fa-user-circle", true, "/admin/login", "Student Portal", null },
                    { 5, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Digital Resources", 5, "fa-book", true, "/Library", "Library", null },
                    { 6, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Latest Updates", 6, "fa-newspaper-o", true, "/upcomingEvents", "News & Events", null }
                });

            migrationBuilder.UpdateData(
                table: "SiteSettings",
                keyColumn: "Id",
                keyValue: 1,
                column: "UpdatedAt",
                value: new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.InsertData(
                table: "SiteStats",
                columns: new[] { "Id", "CreatedAt", "DisplayOrder", "IconName", "IsActive", "Label", "UpdatedAt", "Value" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, "fa-history", true, "50+ Years", null, "50+" },
                    { 2, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, "fa-graduation-cap", true, "15+ Programmes", null, "15+" },
                    { 3, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 3, "fa-users", true, "5000+ Students", null, "5000+" },
                    { 4, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 4, "fa-chalkboard-teacher", true, "100+ Faculty", null, "100+" },
                    { 5, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 5, "fa-star", true, "100% Quality", null, "100%" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "QuickLinks",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "QuickLinks",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "QuickLinks",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "QuickLinks",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "QuickLinks",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "QuickLinks",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "SiteStats",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "SiteStats",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "SiteStats",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "SiteStats",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "SiteStats",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.UpdateData(
                table: "SiteSettings",
                keyColumn: "Id",
                keyValue: 1,
                column: "UpdatedAt",
                value: null);
        }
    }
}
