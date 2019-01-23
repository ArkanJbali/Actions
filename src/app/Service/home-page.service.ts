import { EventsInstance } from './../Model/EventsList.model';
import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { ActionLog} from '../model/HomePage.model';
import {Observable} from 'rxjs';
// Dependency Injections its object from another class that inject it
@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {
  constructor(private http: HttpClient) { }
  // private serviceUrl = './assets/users.json';
private _posturl = 'https://loggitor-be.herokuapp.com/getEventInsTable/1';
//   getActionLog(): Observable< ActionLog[]> {
//     return this.http.get<ActionLog[]>(this.serviceUrl);
// }
 getPosts(): Observable<EventsInstance[]> {
   return this.http.get<EventsInstance[]>(this._posturl);
 }
}
