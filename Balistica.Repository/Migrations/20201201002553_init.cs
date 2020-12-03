using Microsoft.EntityFrameworkCore.Migrations;

namespace Balistica.Repository.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Armas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Marca = table.Column<string>(nullable: true),
                    PaisDeFabricacao = table.Column<string>(nullable: true),
                    Tipo = table.Column<string>(nullable: true),
                    Modelo = table.Column<string>(nullable: true),
                    Alma = table.Column<string>(nullable: true),
                    Raias = table.Column<int>(nullable: false),
                    TipoDoCano = table.Column<string>(nullable: true),
                    ComprimentoDoCano = table.Column<string>(nullable: true),
                    Acao = table.Column<string>(nullable: true),
                    Carregamento = table.Column<string>(nullable: true),
                    Percussao = table.Column<string>(nullable: true),
                    TiroUnitario = table.Column<string>(nullable: true),
                    Repeticao = table.Column<string>(nullable: true),
                    Capacidade = table.Column<string>(nullable: true),
                    Acabamento = table.Column<string>(nullable: true),
                    Observacoes = table.Column<string>(nullable: true),
                    Imagem = table.Column<string>(nullable: true),
                    CalibreId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Armas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Calibres",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nominal = table.Column<string>(nullable: true),
                    Imagem = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calibres", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Municoes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Marca = table.Column<string>(nullable: true),
                    TipoEstojo = table.Column<string>(nullable: true),
                    TipoProjetil = table.Column<string>(nullable: true),
                    TipoEspoleta = table.Column<string>(nullable: true),
                    Imagem = table.Column<string>(nullable: true),
                    CalibreId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Municoes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Armas");

            migrationBuilder.DropTable(
                name: "Calibres");

            migrationBuilder.DropTable(
                name: "Municoes");
        }
    }
}
