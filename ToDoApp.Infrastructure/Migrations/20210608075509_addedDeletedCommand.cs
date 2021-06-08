using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoApp.Infrastructure.Migrations
{
    public partial class addedDeletedCommand : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "Services",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "Services");
        }
    }
}
