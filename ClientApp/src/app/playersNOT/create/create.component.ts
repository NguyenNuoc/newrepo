import { Component, OnInit } from '@angular/core';
//import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

//import { Position } from "../position";
import { PlayersService } from "../players.service";
//import { PositionsService } from "../positions.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
      shirtNo: ['', Validators.required],
      name: ['', Validators.required],
      //positionId: [''],
	  
	//  fullName: ['', Validators.required],
	  
      appearances: [''],
      goals: [''],
    });
  }

  
      get fval() { return this.createForm.controls; }

	  
	  /*
  
	   signup(){
  this.submitted = true;
  if (this.createForm.invalid) {
  //return;
  alert('form fields are not validated');
  return;
  }
  //alert('form fields are validated successfully!');
  }
  
  */


  
  ngOnInit(): void {

  

    }
	

  onSubmit(formData) {
    console.log(formData.value);
    this.playersService.createPlayer(formData.value).subscribe(res => {
      this.router.navigateByUrl('players/list');
    });
  }
}
  