import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Beer } from './beer';

@Injectable()
export class BeersService {

  private beersUrl = '/api/beers';
  
  constructor(private http: Http) { }


  getBeers(): Promise<Beer[]> {
  	return this.http.get(this.beersUrl)
  				.toPromise()
  				.then(response => response.json() as Beer[])
  				.catch(this.handleError);
  };


  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }

}
