
  
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators  } from '@angular/forms'; 

//import {ChangeDetectionStrategy} from "@angular/core";

 
  
  //   OLD CODE Work   
  
  import {Component, OnInit } from '@angular/core';
//import { Player } from "../player";
//import { PlayersService } from "../players.service";
  

import { Medlem } from "../medlem";
import { MedlemsService } from "../medlems.service";


@Component({
  selector: 'app-list',
  
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
  //changeDetection: ChangeDetectionStrategy.OnPush,
  
})

 
export class ListComponent implements OnInit {

//    players: string[] = [];    
//  page: number = 1;
//   @Input() players: Player[] = [];

medlems: Medlem[] = [];

Smedlems: Medlem[] = [];
  
    createForm;

    
  constructor(public medlemsService: MedlemsService,
  
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  
  ) {
	  
	this.createForm = this.formBuilder.group({   
       

	 mnavn: [null, Validators.required],


    });  
	  
	  
  } // contructor
  
  
  ngOnInit(): void {  
	       
	  
    this.medlemsService.getMedlems().subscribe((data: Medlem[]) => {
      this.medlems = data;

     document.getElementById("mList").style.visibility="hidden";
	  
						//alert(JSON.stringify(this.medlems));
//	  this.players = this.config.currentPage= this.players['page'] ? this.players['page']:1 );
  
  
  document.getElementById("mnavn").addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("sok").click();
   
    //this.getMedlemnavn();

	
  }
});/////////////////////////////////////////////////////////////////////////////////////////////// 
 
  
  });
  
  }///////////////////////////////////////////////////////////////////////////////////////////////////////

  
  
  
  deleteMedlem(id) {
	  
	  if(window.confirm('Are sure you want to delete this item ?')){
          //put your delete method logic here
          //}
          this.medlemsService.deleteMedlem(id).subscribe(res => {
              this.medlems = this.medlems.filter(item => item.medlem_Id !== id);
          });
      }  // if
   
  } // deleteMedlem(id)

    

 filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}
 

 
  getList() {
//          this.router.navigateByUrl('counter');
	//	  this.router.navigateByUrl('medlems/list');
		   
		      this.medlemsService.getMedlems().subscribe((data: Medlem[]) => {
                   this.medlems = data;

				   document.getElementById("re-List").style.visibility="visible";
			   //document.getElementById("innavn").style.visibility="visible";
 			   
			   document.getElementById("sok").style.visibility="visible";
			   document.getElementById("mList").style.visibility="hidden";   

              });
  }/////////////////

   

   testing() {
   /*  
   document.getElementById("mnavn").addEventListener('enter', function(e) {
     
   	alert('fornavn');
   
   });
   */   
    
   document.getElementById("myInput").addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
}); 
 
   
}////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



getMedlemnavn() {

 	    
         var inputValue = document.querySelector<HTMLInputElement>('#mnavn')!.value;
		
	   	 var inputValueSpace =   inputValue.toLowerCase( )  +  '   '  +  '   ';
		
		var input = document.getElementById("mnavn");

		
	   this.medlemsService.getMedlemFullnavn(inputValueSpace).subscribe(res => {
	   
           //alert(res);
//		   alert(JSON.stringify(res['fornavn']));
		     
           
		   if(res['fornavn'] == undefined) {
			 
			alert('SORRY, NOT FOUND');
 
               //var result   =  5 ;        
			  // break;
            } //////////////////////////////////////

			 
            if(res['fornavn'] != undefined) {
 			    
			   document.getElementById("re-List").style.visibility="hidden";
			   //document.getElementById("innavn").style.visibility="hidden";   
               
			   document.getElementById("sok").style.visibility="hidden";   

			   document.getElementById("mList").style.visibility="visible";  
        
            }///////////////////////////////////////////////			
			
			
		   
	this.medlems =  this.medlems.filter(item =>item.fornavn +  ' '  + item.etternavn 
	                            
								== res['fornavn'].toString() + ' ' + res['etternavn'].toString() );
 		   
	   });


//}
//});
	   
  } // getMedlemEtternavn()

    
  }

  // OLD CODE END





//   This work   baseUrl + 'api/Players'
/*
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-player',
  templateUrl: './list.component.html'
})
 

export class ListComponent {
  public players: Player[];
 
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Player[]>(baseUrl + 'api/Players').subscribe(result => {
      this.players = result;
    }, error => console.error(error));
  }
}
 
interface Player {
  id: number;
  name: string;
  shirtNo: number;
  appearances: number;
  goals: number;
  positionName: number;
  goalsPerMatch: number;
}
*/
