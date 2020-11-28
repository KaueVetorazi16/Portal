using Microsoft.EntityFrameworkCore.Migrations;

namespace Balistica.API.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Armas",
                columns: table => new
                {
                    ArmaId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Marca = table.Column<string>(nullable: true),
                    Tipo = table.Column<string>(nullable: true),
                    Modelo = table.Column<string>(nullable: true),
                    Calibre = table.Column<string>(nullable: true),
                    Imagem = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Armas", x => x.ArmaId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Armas");
        }
    }
}
