import { EventsInstance } from './../Model/HomePage.model';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../model/EventsList.model';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
// private _posturl = 'http://jsonplaceholder.typicode.com/posts';

//   constructor(private http: HttpClient) {
//    }
//    getPosts(): Observable<Events[]> {
//      return this.http.get<Events[]>(this._posturl);
//    }
   private _posturl = 'https://loggitor-be.herokuapp.com/getEventInsTable/1';

  constructor(private http: HttpClient) {
   }
   getPosts(): Observable<EventsInstance[]> {
     return this.http.get<EventsInstance[]>(this._posturl);
   }
}
