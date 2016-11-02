import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


	events: Event[];

  	constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents()
    	.then(returnedEvents=>this.events = returnedEvents);
  }

}
