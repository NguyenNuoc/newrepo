using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace angular_new_app.Models
{
    public partial class Medlem
    {
		 
//		[BindProperty]
		[Key]
        public Guid Medlem_Id { get; set; }
           
		public string Fornavn { get; set; }

   //     [BindProperty]
        public string Etternavn { get; set; }
		public string? Bosted { get; set; }
		
        public int MobilTlf { get; set; }
		public string Email { get; set; }
		
        public DateTime Fodselsdato { get; set; }
        

		 public int CurrentKontintId { get; set; }
        
		public Kontingent Kontingent { get; set; }

        //public decimal GoalsPerMatch => Math.Round((decimal)Goals / (decimal)Appearances, 2);

    }
}
