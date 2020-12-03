﻿// <auto-generated />
using Balistica.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Balistica.Repository.Migrations
{
    [DbContext(typeof(BalisticaContext))]
    [Migration("20201201002553_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113");

            modelBuilder.Entity("Balistica.Domain.Arma", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Acabamento");

                    b.Property<string>("Acao");

                    b.Property<string>("Alma");

                    b.Property<string>("CalibreId");

                    b.Property<string>("Capacidade");

                    b.Property<string>("Carregamento");

                    b.Property<string>("ComprimentoDoCano");

                    b.Property<string>("Imagem");

                    b.Property<string>("Marca");

                    b.Property<string>("Modelo");

                    b.Property<string>("Observacoes");

                    b.Property<string>("PaisDeFabricacao");

                    b.Property<string>("Percussao");

                    b.Property<int>("Raias");

                    b.Property<string>("Repeticao");

                    b.Property<string>("Tipo");

                    b.Property<string>("TipoDoCano");

                    b.Property<string>("TiroUnitario");

                    b.HasKey("Id");

                    b.ToTable("Armas");
                });

            modelBuilder.Entity("Balistica.Domain.Calibre", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Imagem");

                    b.Property<string>("Nominal");

                    b.HasKey("Id");

                    b.ToTable("Calibres");
                });

            modelBuilder.Entity("Balistica.Domain.Municao", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CalibreId");

                    b.Property<string>("Imagem");

                    b.Property<string>("Marca");

                    b.Property<string>("TipoEspoleta");

                    b.Property<string>("TipoEstojo");

                    b.Property<string>("TipoProjetil");

                    b.HasKey("Id");

                    b.ToTable("Municoes");
                });
#pragma warning restore 612, 618
        }
    }
}
