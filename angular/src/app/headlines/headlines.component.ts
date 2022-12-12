import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../models/newsitem.model';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'hln-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

  newsItems: NewsItem[] = [];

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) { }

  /**
   * If the newsItems array is empty, then call the getNews() function.
   */
  ngOnInit(): void {
    if (this.newsItems.length == 0)
      this.getNews();
  }

 /**
  * The function getNews() is a function that is called when the page loads. It calls the
  * getLatestNews() function in the newsService.ts file, which returns an observable. The observable is
  * then subscribed to, and the response is stored in the newsItems array.
  */
  getNews() {
    this.newsService.getLatestNews().subscribe(res => {
      this.newsItems = res.articles;
      console.log(res);
    })
  }

}
