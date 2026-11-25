using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SJMC.CMS.API.Migrations
{
    /// <inheritdoc />
    public partial class AddSampleSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Courses",
                columns: new[] { "Id", "CreatedAt", "Description", "DisplayOrder", "Duration", "Eligibility", "ImagePath", "IsActive", "Name", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Two-year postgraduate program covering print, electronic, and digital media with practical training in reporting, editing, and production.", 1, "2 Years", "Bachelor's degree in any discipline with 50% marks", null, true, "M.A. in Journalism and Mass Communication", null },
                    { 2, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Doctoral program for advanced research in media studies, communication theory, and journalism practices.", 2, "3-5 Years", "Master's degree in Mass Communication with 55% marks", null, true, "Ph.D. in Mass Communication", null },
                    { 3, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "One-year diploma program focusing on digital content creation, social media management, and online journalism.", 3, "1 Year", "Bachelor's degree in any discipline", null, true, "PG Diploma in Digital Media", null }
                });

            migrationBuilder.InsertData(
                table: "EventItems",
                columns: new[] { "Id", "CreatedAt", "Description", "DisplayOrder", "EventDate", "ImagePath", "IsActive", "Title", "UpdatedAt", "Venue" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 11, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Join us for the annual media festival featuring competitions, workshops, and networking opportunities with industry professionals.", 1, new DateTime(2024, 12, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, "Annual Media Festival 2026", null, "SJMC Campus, AKU Patna" },
                    { 2, new DateTime(2024, 11, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Showcase of best photographs by SJMC students covering various themes from campus life to social issues.", 2, new DateTime(2024, 12, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, "Photography Exhibition", null, "Media Center, SJMC" }
                });

            migrationBuilder.InsertData(
                table: "NewsItems",
                columns: new[] { "Id", "CreatedAt", "Description", "DisplayOrder", "ImagePath", "IsActive", "PublishDate", "Title", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 11, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "SJMC Aryabhatta Knowledge University Patna announces admission for M.A. in Journalism and Mass Communication for the academic session 2026-28. Apply online through AKU admission portal.", 1, null, true, new DateTime(2024, 11, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "Admission Open for M.A. Journalism 2026", null },
                    { 2, new DateTime(2024, 11, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "A two-day workshop on Digital Journalism and New Media trends organized by SJMC in collaboration with leading media houses.", 2, null, true, new DateTime(2024, 11, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Media Workshop on Digital Journalism", null },
                    { 3, new DateTime(2024, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Renowned journalist from national media house delivered guest lecture on 'Challenges in Modern Journalism' to SJMC students.", 3, null, true, new DateTime(2024, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Guest Lecture by Senior Journalist", null }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "EventItems",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "EventItems",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "NewsItems",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "NewsItems",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "NewsItems",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
