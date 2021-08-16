



import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute, Router , ParamMap } from '@angular/router';

import { Medlem } from "../medlem";
import { MedlemsService } from "../medlems.service";

import { Kontingent } from "../kontingent";
import { KontingentsService } from "../kontingents.service";
   
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
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
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

//  empName: string = Guid.create; 
  
  
  medlem: Medlem;
  //positions: Position[] = [];
  createForm;
  uuidValue:string;

    
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  kontingents: Kontingent[] = [];
  
  constructor(
  
  public medlemsService: MedlemsService,
  public kontingentsService: KontingentsService,  
  //public playersService: PlayersService,
    //public positionsService: PositionsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  )

  {
    this.createForm = this.formBuilder.group({   
       
//       str:  this.empName,
       //cleanG:  str.replace(/value/g,""),

     medlem_Id:  Guid.create().toString().replace(/value/g,""),
	 
	 //medlem_Id: document.getElementById("medlem_Id").value,
	 //medlem_Id: [''],

	 fornavn: [null, Validators.required],
	  etternavn: [null, Validators.required],
	  bosted: [''],
	  mobilTlf: [null, Validators.required],
	  email: [null, Validators.required],  
	  
	  //email: [null, Validators.required,  Validators.pattern(this.emailPattern)],
	  
	  fodselsdato: [null, Validators.required],
	  currentKontintId: [null, Validators.required],
	     
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
		 //this.id = this.route.snapshot.queryParams.url;
		 
	 //this.id = this.route.snapshot.params['id'];
		 
//		 alert(JSON.stringify(this.id));
		 
		 
	//this.id = '131820e1-2bff-4f64-8f35-7d57f630aa6d';
	
	/*
           this.medlemsService.getMedlem(this.id.toString()).subscribe((data: Medlem) => {
                    this.medlem = data;
                    this.editForm.patchValue(data);
           });
*/


             this.kontingentsService.getKontingents().subscribe((data: Kontingent[]) => {
                    this.kontingents = data;
           });


  
		    
}/////////////

    
  onSubmit(formData) {
    console.log(formData.value);
    
	 
	//alert(JSON.stringify(formData.value));
	
 	
	this.medlemsService.createMedlem(formData.value).subscribe(res => {
  
	
//    this.medlemsService.updateMedlem(this.id, formData.value).subscribe(res => {

	
	 this.router.navigateByUrl('medlems/list');
    });
  }

  
    
  get email() {
    return this.createForm.get('email');
} 

  
/*  
  generateUUID(){
    this.uuidValue=  Guid.create();
	
	  var el_down = document.getElementById("medlem_Id").value;
	
	 document.getElementById("medlem_Id").value  =  this.uuidValue ;
	
	 //el_down.innerHTML = document.getElementById("medlem_Id").value;
	 
	 //el_down.innerHTML =  "Value = " + "'" + this.uuidValue + "'";
 
     //              "Value = " + "'" + this.uuidValue + "'";
 
 
    return this.uuidValue;
  }
  */
  
  }
