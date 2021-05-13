using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoApp.Infrastructure.Migrations
{
    public partial class seedData2312312547zfasdasd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CategoryName", "ParentId", "ServiceProviderId" },
                values: new object[,]
                {
                    { 1, "Čišćenje kuća", null, null },
                    { 2, "Iznajmljivanje party kuća", null, null },
                    { 3, "Šetanje pasa", null, null },
                    { 4, "Pravljenje kolača", null, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
