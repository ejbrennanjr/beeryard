import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Event } from './event';

@Injectable()
export class EventsService {

  private eventsUrl = '/api/events';
  
  constructor(private http: Http) { }


  getEvents(): Promise<Event[]> {
  	return this.http.get(this.eventsUrl)
  				.toPromise()
  				.then(response => response.json() as Event[])
  				.catch(this.handleError);
  };


  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }

}
