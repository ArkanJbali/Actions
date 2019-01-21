import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventListComponent } from './event-list/event-list.component';
import { AddActionComponent } from './add-action/add-action.component';
import { Component } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatCardModule, MatPaginatorModule} from '@angular/material';
import {HomePageServiceService} from './Service/home-page.service';
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventListComponent,
    AddActionComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
