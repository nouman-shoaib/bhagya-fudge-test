import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
newsData: any;
today = new Date();
  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }
  getNews() {
    this.newsService.getNews().subscribe(data =>{
      if(data.length>0) {
        this.newsData = data;
      }
    })
  }
}
