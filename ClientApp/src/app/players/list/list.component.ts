
  
import { NgxPaginationModule } from 'ngx-pagination';
//import { ActivatedRoute, Router } from '@angular/router';
 

//import {ChangeDetectionStrategy} from "@angular/core";



  //   OLD CODE Work   
  
  import {Component, OnInit } from '@angular/core';
import { Player } from "../player";
import { PlayersService } from "../players.service";

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

players: Player[] = [];

  
  constructor(public playersService: PlayersService) {} // contructor
  
  
  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
	  
//	  this.players = this.config.currentPage= this.players['page'] ? this.players['page']:1 );
  
  });
  }

  
  
  deletePlayer(id) {
	  
	
	if(window.confirm('Are sure you want to delete this item ?')){

	  
         this.playersService.deletePlayer(id).subscribe(res => {
              this.players = this.players.filter(item => item.id !== id);
           });
        }
	
	} //if
  } //delete

  // OLD CODE END
  
/*
    if(window.confirm('Are sure you want to delete this item ?')){
    //put your delete method logic here
   //}


  this.playersService.deletePlayer(id).subscribe(res => {
     this.players = this.players.filter(item => item.id !== id);
	  });
  
  }
  
  } //if

*/

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
