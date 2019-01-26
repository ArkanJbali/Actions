import { HomePageComponent } from './home-page/home-page.component';
import { AddActionComponent } from './add-action/add-action.component';
import { EventListComponent } from './event-list/event-list.component';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: 'eventlist', component: EventListComponent },
{ path: 'addAction', component: AddActionComponent },
{ path: 'home', component: HomePageComponent }];
@NgModule({
 // declarations: [],
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
