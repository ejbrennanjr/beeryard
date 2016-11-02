import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventsService } from '../events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
  selectedEvent: Event;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents()
    	.then(returnedEvents=>this.events = returnedEvents);
  }

}
