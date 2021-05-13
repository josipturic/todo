using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoApp.Infrastructure.Migrations
{
    public partial class autogenerateId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Category_MainCategoryId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Category_Category_ParentId",
                table: "Category");

            migrationBuilder.DropForeignKey(
                name: "FK_Category_AspNetUsers_ServiceProviderId",
                table: "Category");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Category",
                table: "Category");

            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "AspNetUsers");

            migrationBuilder.RenameTable(
                name: "Category",
                newName: "Categories");

            migrationBuilder.RenameIndex(
                name: "IX_Category_ServiceProviderId",
                table: "Categories",
                newName: "IX_Categories_ServiceProviderId");

            migrationBuilder.RenameIndex(
                name: "IX_Category_ParentId",
                table: "Categories",
                newName: "IX_Categories_ParentId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Categories_MainCategoryId",
                table: "AspNetUsers",
                column: "MainCategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Categories_ParentId",
                table: "Categories",
                column: "ParentId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_AspNetUsers_ServiceProviderId",
                table: "Categories",
                column: "ServiceProviderId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Categories_MainCategoryId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Categories_ParentId",
                table: "Categories");

            migrationBuilder.DropForeignKey(
                name: "FK_Categories_AspNetUsers_ServiceProviderId",
                table: "Categories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.RenameTable(
                name: "Categories",
                newName: "Category");

            migrationBuilder.RenameIndex(
                name: "IX_Categories_ServiceProviderId",
                table: "Category",
                newName: "IX_Category_ServiceProviderId");

            migrationBuilder.RenameIndex(
                name: "IX_Categories_ParentId",
                table: "Category",
                newName: "IX_Category_ParentId");

            migrationBuilder.AddColumn<string>(
                name: "DateOfBirth",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Category",
                table: "Category",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Category_MainCategoryId",
                table: "AspNetUsers",
                column: "MainCategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Category_Category_ParentId",
                table: "Category",
                column: "ParentId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Category_AspNetUsers_ServiceProviderId",
                table: "Category",
                column: "ServiceProviderId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
