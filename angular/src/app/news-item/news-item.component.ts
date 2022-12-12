import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from '../models/newsitem.model';

@Component({
  selector: 'hln-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

 /* A way to define a property in a component. */
  @Input() newsItem!: NewsItem;
  @Input() suggestions!: NewsItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  /**
   * The function is called when the user clicks on a news item. It logs a message to the console, and
   * then navigates to the detail page, passing the news item as a parameter
   */
  onClicked() {
    console.log('clicked');
    this.router.navigateByUrl('detail', { state: this.newsItem });
  }

}
