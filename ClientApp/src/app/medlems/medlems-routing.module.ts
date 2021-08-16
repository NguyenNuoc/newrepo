import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
//import { DetailsComponent } from './details/details.component';


import { ReadComponent } from './read/read.component';


import { CreateComponent } from './create/create.component';

import { EditComponent } from './edit/edit.component';


/*
var GUID_REGEXP = /^[a-f\d]{8}-([a-f\d]{4}-){3}[a-f\d]{12}$/i;
$urlMatcherFactoryProvider.type('guid', {
  encode: angular.identity,
  decode: angular.identity,
  is: function(item) {
     return GUID_REGEXP.test(item);
  }
});
*/  
//ni : string;   


/*
module.config(['$urlMatcherFactoryProvider', function($urlMatcherFactory) {
  $urlMatcherFactory.type('guid', {
    decode: function(val) { return val != null ? val.toString() : val; },
    encode: function(val) { return val != null ? val.toString() : val; },
    is: function(val) { return this.pattern.test(val); },
    pattern: /^[a-f\d]{8}-([a-f\d]{4}-){3}[a-f\d]{12}$/i
  })
}]);
*/

 

const routes: Routes = [
  { path: 'medlems', redirectTo: 'medlems/list', pathMatch: 'full' },
  { path: 'medlems/list', component: ListComponent },
  
  //{ path: 'medlems/:medlemid/details', component: DetailsComponent },
  //{ path: 'medlems/create', component: CreateComponent },
   
          
//  { path: 'medlems/:medlemid/edit', component: EditComponent },// Dont put the / in the end
   
    
//  { path: 'medlems/:{id:(?:[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12})}/edit', component: EditComponent },


   { path: 'medlems/:id/read', component: ReadComponent },  
	 
  { path: 'medlems/:id/edit', component: EditComponent },

  
  { path: 'medlems/create', component: CreateComponent }
   
];   
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedlemsRoutingModule { }
