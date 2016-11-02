import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../newsItem';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: NewsItem[];
  selectedNewsItem: NewsItem;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews()
    	.then(news=>this.news = news);
  }

}
