import { EventsService } from './../Service/events.service';
import { Component, OnInit } from '@angular/core';


  // @Component({
  //   selector: 'app-event-list',
  //   template: `
  //     <h2>Event List</h2>
  //     <table *ngFor="let event of events" class='table'>
  //     <tr>
  //     <th>userid</th>
  //     <th>id</th>
  //     <th>title</th>
  //     <th>body</th>
  //     </tr>
  //     <tr>
  //     <td>{{event.userId}}</td>
  //     <td>{{event.id}}</td>
  //     <td>{{event.title}}</td>
  //     <td>{{event.body}}</td>
  //     </tr>
  //     </table>
  //      `,
  //   styles: []
  // })
  @Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
  })
export class EventListComponent implements OnInit {
public events = [];

  constructor(private eventService: EventsService) { }
  ngOnInit() {
    this.eventService.getPosts().subscribe(data => this.events = data);
  }

}
