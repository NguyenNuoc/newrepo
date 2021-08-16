using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
//

//using System.ComponentModel.DataAnnotations;
//using System.Collections.IEnumerable;
using System.Collections.Generic;
using angular_new_app.Models;



namespace angular_new_app.Data
{
    public partial class BlogContext : DbContext
    {
        public BlogContext()
        {
        }

        public BlogContext(DbContextOptions<BlogContext> options)
            : base(options)
        {
        }


        public virtual DbSet<Medlem> Medlems { get; set; }			
        public virtual DbSet<Kontingent> Kontingents { get; set; }   

		

		
		
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {



                    modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Medlem>(entity =>
            {
				
				
				modelBuilder.Entity<Medlem>()
            .HasOne<Kontingent>(s => s.Kontingent)
            .WithMany(g => g.Medlems)
            .HasForeignKey(s => s.CurrentKontintId);
				
				
//                entity.HasIndex(e => e.KontingentId, "IX_Medlems_KontingentId");


                 // Add the shadow property to the model
       /*
	   modelBuilder.Entity<Medlem>()
            .Property<int>("KontForeignKey");
        

                entity.HasOne(d => d.Kontingent)
                    .WithMany(p => p.Medlems)
                    .HasForeignKey("KontForeignKey");
	  		*/		 
//					.HasConstraintName("FK_Medlems_Kontingents");
            });
 
			
			
            modelBuilder.Entity<Kontingent>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(50);
            });

		
		 
              /*
 modelBuilder.Entity<Medlem>()
 
         entity.HasKey(t => new { t.Medlem_Id });
		 
            entity.HasOne<Kontingent>(s => s.Kontingent)
            .WithMany(g => g.Medlems)
            .HasForeignKey(s => s.KontingentId);			  
		*/
              
			//modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");
			
            /*
            modelBuilder.Entity<Medlem>(entity =>
            {
                //entity.Property(e => e.Name).HasMaxLength(50);

				
            entity.HasKey(t => new { t.Medlem_Id });
				
                entity.HasOne(d => d.Kontingent)
                    .WithMany(p => p.Medlems)
                    .HasForeignKey(d => d.KontingentId)
                    .HasConstraintName("FK_Medlems_Kontingents");
            });

            modelBuilder.Entity<Kontingent>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(50);
            });

            */

			 
			/* 
			 modelBuilder.Entity<Medlem>()
            .Property<int>("Kontingent_Id");
            */
			
			/*
						modelBuilder.Entity<Kontingent>()
            .Property<int>("Kontingent_Id");
            */
			
			
            /*
			modelBuilder.Entity<Medlem>()
				.HasOne(p => p.Kontingent)
                .WithMany(b => b.Medlems)
                .HasForeignKey(p => p.KontingentId ) ;
            */

				 
	         //   .HasConstraintName("FK_Medlems_Kontingents");				    
            
              
			/*
			modelBuilder.Entity<Kontingent>(entity =>
            {
				//entity.Property(e => e.Pk_Kontingent_Id ).HasMaxLength(50);
                entity.Property(e => e.Name).HasMaxLength(50);
            });
               */
   
		
        }
	}
}
