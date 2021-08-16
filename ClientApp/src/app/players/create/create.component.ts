import { Component, OnInit } from '@angular/core';
//import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//import { Position } from "../position";
import { PlayersService } from "../players.service";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

//import { PositionsService } from "../positions.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


//  form: FormGroup;


      
  //positions: Position[] = [];
  createForm;

  constructor(
    public playersService: PlayersService,
    //public positionsService: PositionsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      shirtNo: [''],

	  //name: [null, Validators.required],
	  
      Fornavn: [null, Validators.required],
      mobiltlf: [null,Validators.required],
	  Etternavn: [null, Validators.required],
	  email: [null, Validators.required],
	  fodselsdato: [null, Validators.required],
      kontingent: [null, Validators.required],
    
      /*
	  mobiltlf: [null,Validators.required],
	  email: [null, Validators.required],
	  fodselsdato: [null, Validators.required],
	  kontingent: [null, Validators.required],
	  */
	  
	  bosted: [''],
      //appearances: [''],
      //goals: [''],
	  
	//        testname: [null, Validators.required],

	
    //toDo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],

	
    });
  }

  ngOnInit(): void {
/*	  
    this.positionsService.getPositions().subscribe((data: Position[]) => {
      this.positions = data;
    });
*/

	}
	
	 
  onSubmit(formData) {
    console.log(formData.value);
    this.playersService.createPlayer(formData.value).subscribe(res => {
      this.router.navigateByUrl('players/list');
    });
	

  }//onSubmit
  
  
}
