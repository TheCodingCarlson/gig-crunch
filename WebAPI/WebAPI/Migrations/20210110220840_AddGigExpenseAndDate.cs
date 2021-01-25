using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class AddGigExpenseAndDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Gigs");

            migrationBuilder.AddColumn<int>(
                name: "DateId",
                table: "Gigs",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "GigDate",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Day = table.Column<int>(type: "int", nullable: false),
                    Month = table.Column<int>(type: "int", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GigDate", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Gigs_DateId",
                table: "Gigs",
                column: "DateId");

            migrationBuilder.AddForeignKey(
                name: "FK_Gigs_GigDate_DateId",
                table: "Gigs",
                column: "DateId",
                principalTable: "GigDate",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Gigs_GigDate_DateId",
                table: "Gigs");

            migrationBuilder.DropTable(
                name: "GigDate");

            migrationBuilder.DropIndex(
                name: "IX_Gigs_DateId",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "DateId",
                table: "Gigs");

            migrationBuilder.AddColumn<string>(
                name: "Date",
                table: "Gigs",
                type: "nvarchar(10)",
                nullable: true);
        }
    }
}
