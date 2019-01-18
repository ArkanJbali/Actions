import { Events } from './Model/EventsList.model';
import { EventsService } from './Service/events.service';

import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventsService]
})
export class AppComponent {

  title = 'Action';
  }
