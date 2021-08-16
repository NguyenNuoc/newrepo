using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace angular_new_app.Migrations
{
    public partial class CreateMedlemDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kontingents",
                columns: table => new
                {
                    KontintId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kontingents", x => x.KontintId);
                });

            migrationBuilder.CreateTable(
                name: "Medlems",
                columns: table => new
                {
                    Medlem_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Fornavn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Etternavn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bosted = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MobilTlf = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Fodselsdato = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CurrentKontintId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medlems", x => x.Medlem_Id);
                    table.ForeignKey(
                        name: "FK_Medlems_Kontingents_CurrentKontintId",
                        column: x => x.CurrentKontintId,
                        principalTable: "Kontingents",
                        principalColumn: "KontintId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Medlems_CurrentKontintId",
                table: "Medlems",
                column: "CurrentKontintId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Medlems");

            migrationBuilder.DropTable(
                name: "Kontingents");
        }
    }
}
