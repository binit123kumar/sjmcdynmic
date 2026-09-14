using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SJMC.CMS.API.Migrations
{
    /// <inheritdoc />
    public partial class AddGalleryMediaRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MediaId",
                table: "GalleryItems",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_GalleryItems_MediaId",
                table: "GalleryItems",
                column: "MediaId");

            migrationBuilder.AddForeignKey(
                name: "FK_GalleryItems_MediaFiles_MediaId",
                table: "GalleryItems",
                column: "MediaId",
                principalTable: "MediaFiles",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GalleryItems_MediaFiles_MediaId",
                table: "GalleryItems");

            migrationBuilder.DropIndex(
                name: "IX_GalleryItems_MediaId",
                table: "GalleryItems");

            migrationBuilder.DropColumn(
                name: "MediaId",
                table: "GalleryItems");
        }
    }
}
