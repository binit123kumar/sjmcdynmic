using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SJMC.CMS.API.Migrations
{
    /// <inheritdoc />
    public partial class AddAdmissionApplicationAndHeroContentSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AdmissionApplications",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    FatherName = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
                    MotherName = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    Course = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Qualification = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdminRemarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdmissionApplications", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "HeroContents",
                columns: new[] { "Id", "CampusImagePath", "CreatedAt", "CtaButtons", "DisplayOrder", "IsActive", "MediaStudioImagePath", "Pillars", "Tagline", "UpdatedAt" },
                values: new object[] { 1, "/uploads/hero/home_slider_1.webp", new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "[{\"text\": \"Explore SJMC\", \"link\": \"#sjmc-about\", \"class\": \"sjmc-btn-orange\"}, {\"text\": \"Admission 2026\", \"link\": \"https://adms.akubihar.ac.in/\", \"class\": \"sjmc-btn-purple\"}]", 1, true, "/uploads/hero/home_slider_2.webp", "[\"Media\", \"Society\", \"Knowledge\", \"Responsible Communication\"]", "Welcome to SJMC", null });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdmissionApplications");

            migrationBuilder.DeleteData(
                table: "HeroContents",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
