using Microsoft.EntityFrameworkCore.Migrations;

namespace Balistica.Repository.Migrations
{
    public partial class ChaveEstrangeira : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CalibreId1",
                table: "Municoes",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CalibreId1",
                table: "Armas",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Municoes_CalibreId1",
                table: "Municoes",
                column: "CalibreId1");

            migrationBuilder.CreateIndex(
                name: "IX_Armas_CalibreId1",
                table: "Armas",
                column: "CalibreId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Armas_Calibres_CalibreId1",
                table: "Armas",
                column: "CalibreId1",
                principalTable: "Calibres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Municoes_Calibres_CalibreId1",
                table: "Municoes",
                column: "CalibreId1",
                principalTable: "Calibres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Armas_Calibres_CalibreId1",
                table: "Armas");

            migrationBuilder.DropForeignKey(
                name: "FK_Municoes_Calibres_CalibreId1",
                table: "Municoes");

            migrationBuilder.DropIndex(
                name: "IX_Municoes_CalibreId1",
                table: "Municoes");

            migrationBuilder.DropIndex(
                name: "IX_Armas_CalibreId1",
                table: "Armas");

            migrationBuilder.DropColumn(
                name: "CalibreId1",
                table: "Municoes");

            migrationBuilder.DropColumn(
                name: "CalibreId1",
                table: "Armas");
        }
    }
}
