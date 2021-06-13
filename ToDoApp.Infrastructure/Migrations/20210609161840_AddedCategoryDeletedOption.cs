using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoApp.Infrastructure.Migrations
{
    public partial class AddedCategoryDeletedOption : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "CategoryDeleted",
                table: "Categories",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryDeleted",
                table: "Categories");
        }
    }
}
