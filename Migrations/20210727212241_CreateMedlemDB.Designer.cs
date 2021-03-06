// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using angular_new_app.Data;

namespace angular_new_app.Migrations
{
    [DbContext(typeof(BlogContext))]
    [Migration("20210727212241_CreateMedlemDB")]
    partial class CreateMedlemDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:Collation", "Latin1_General_CI_AS")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("angular_new_app.Models.Kontingent", b =>
                {
                    b.Property<int>("KontintId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("KontintId");

                    b.ToTable("Kontingents");
                });

            modelBuilder.Entity("angular_new_app.Models.Medlem", b =>
                {
                    b.Property<Guid>("Medlem_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Bosted")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CurrentKontintId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Etternavn")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Fodselsdato")
                        .HasColumnType("datetime2");

                    b.Property<string>("Fornavn")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MobilTlf")
                        .HasColumnType("int");

                    b.HasKey("Medlem_Id");

                    b.HasIndex("CurrentKontintId");

                    b.ToTable("Medlems");
                });

            modelBuilder.Entity("angular_new_app.Models.Medlem", b =>
                {
                    b.HasOne("angular_new_app.Models.Kontingent", "Kontingent")
                        .WithMany("Medlems")
                        .HasForeignKey("CurrentKontintId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Kontingent");
                });

            modelBuilder.Entity("angular_new_app.Models.Kontingent", b =>
                {
                    b.Navigation("Medlems");
                });
#pragma warning restore 612, 618
        }
    }
}
