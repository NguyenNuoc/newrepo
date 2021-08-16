
/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
*/


import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute, Router , ParamMap } from '@angular/router';



import { Kontingent } from "../kontingent";
import { Medlem } from "../medlem";
//import { Player } from "../player";
//import { Position } from "../position";

import { KontingentsService } from "../kontingents.service";
import { MedlemsService } from "../medlems.service";
//import { PositionsService } from "../positions.service";

import { switchMap } from "rxjs/operators" // RxJS v6
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

 
import { Guid } from "guid-typescript-master/lib/guid";
import {
  FormGroup,
  //FormBuilder,
  //Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  uuid: string;

  formMode = 'New';
  sub: any;
  id: any;
  
  name: any;
  
  entryForm: FormGroup;
  error: string | undefined;
 
  isAddNew: boolean = false;

  //heroes$: Observable;
selectedId: string;

Sx : string;

  medlem_Id: Guid;
  //player: Player;
  
  medlem: Medlem;
  
  
  kontingents: Kontingent[] = [];
  editForm;  
 
  constructor(
  
  public kontingentsService: KontingentsService,
  
  public medlemsService: MedlemsService,
    //public playersService: PlayersService,
    //public positionsService: PositionsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  )

  {
    this.editForm = this.formBuilder.group({
     
 medlemId:  Guid.create(),

        
	 medlem_Id: [''],
      fornavn: ['',  Validators.required],
	  etternavn: ['', Validators.required],
	  bosted: [''],
	  mobilTlf: ['', Validators.required],
	      
	  email: [null, Validators.required],
	  fodselsdato: ['', Validators.required],
	  currentKontintId: ['', Validators.required],
	  
	  
      //name: ['', Validators.required],
      //positionId: [''],
      //appearances: [''],
      //goals: [''],
	  //      goalsPerMatch: [''],
    });
  }
  
  
 
  ngOnInit(): void {
    
		
	//this.id = '4e2224eb-f759-46a9-a7ac-1c300153ca69';
	
	//this.id = '131820e1-2bff-4f64-8f35-7d57f630aa6d';
 
		// alert(JSON.stringify(this.id));
	
	
  /*
  this.medlemsService.getMedlem(this.id).subscribe((data: Medlem) => {
      this.medlem = data;
      this.editForm.patchValue(data);
    });
  
  } //
*/

 
       //  alert(JSON.stringify('id'));
    /*    
	this.id = this.route.snapshot.params['id'];   //Funker

        alert(JSON.stringify(this.id));
	*/
	
		//this.id = this.route.snapshot.params['id'];
		
	//	this.id.toString();
	
	     //alert(JSON.stringify(this.id));

		 
		 /*
		  this.route.paramMap.subscribe(params => {
    this.animal = params.get("animal")
	
		 alert(JSON.stringify(this.animal.toString()));
  })

         this.id = this.route.snapshot.paramMap.get('animal');
		 
		 alert(JSON.stringify(this.id.toString()));
		 */
		 

		 /*
		 this.data = this.route.paramMap.pipe(
    switchMap(params => {
      const id = +params.get("animal")
      return this.service.getData(id) // http request
    })
  )
		 
		 	 alert(JSON.stringify(this.data.toString()));
			 
			 alert(JSON.stringify(this.data));
		 */
		 
		   
		 
		 //this.id = this.route.snapshot.queryParams.url;
		 
	 this.id = this.route.snapshot.params['id'];
		 
//		 alert(JSON.stringify(this.id));
		 
		 
	//this.id = '131820e1-2bff-4f64-8f35-7d57f630aa6d';

	
           this.kontingentsService.getKontingents().subscribe((data: Kontingent[]) => {
                    this.kontingents = data;
					  
					//alert(JSON.stringify(this.kontingents));
                    //this.editForm.patchValue(data);
           });

            this.medlemsService.getMedlem(this.id).subscribe((data: Medlem) => {
                    this.medlem = data;
					
					//alert(JSON.stringify(this.medlem));
 
                    this.editForm.patchValue(data);
           });
		   
 		    
}/////////////


/*
    this.playersService.getPlayer(this.id).subscribe((data: Player) => {
      this.player = data;
      this.editForm.patchValue(data);
    });
  }
*/

/*
  onSubmit(formData) {
    console.log(formData.value);
    this.playersService.updatePlayer(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('players/list');
    });
  }
  */
  
  
  onSubmit(formData) {
    console.log(formData.value);
	
//	alert(JSON.stringify(formData.value));
	
    this.medlemsService.updateMedlem(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('medlems/list');
    });
  }
    
  
  }
