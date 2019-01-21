import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { ActionLog } from '../model/HomePage.model';
import {Observable} from 'rxjs';
// Dependency Injections its object from another class that inject it
@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {
  private serviceUrl = './assets/users.json';
  constructor(private http: HttpClient) { }
  getActionLog(): Observable< ActionLog[]> {
    return this.http.get<ActionLog[]>(this.serviceUrl);
}
}
