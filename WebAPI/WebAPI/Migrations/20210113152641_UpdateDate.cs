using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class UpdateDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "Day",
                table: "Gigs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Month",
                table: "Gigs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Gigs",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Day",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "Month",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "Year",
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
    }
}
