import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { NewsItem } from './newsItem';

@Injectable()
export class NewsService {

  private newsUrl = '/api/news';
  
  constructor(private http: Http) { }


  getNews(): Promise<NewsItem[]> {
  	return this.http.get(this.newsUrl)
  				.toPromise()
  				.then(response => response.json() as NewsItem[])
  				.catch(this.handleError);
  };


  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }

}
