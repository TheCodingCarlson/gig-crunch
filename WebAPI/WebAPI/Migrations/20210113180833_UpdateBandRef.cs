using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class UpdateBandRef : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BandCode",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Bands");

            migrationBuilder.AddColumn<int>(
                name: "BandId",
                table: "Gigs",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BandId",
                table: "Gigs");

            migrationBuilder.AddColumn<string>(
                name: "BandCode",
                table: "Gigs",
                type: "nvarchar(10)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Bands",
                type: "nvarchar(10)",
                nullable: true);
        }
    }
}
