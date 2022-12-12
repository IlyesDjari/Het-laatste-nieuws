import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from '../models/newsitem.model';

@Component({
  selector: 'ne-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  item!: any;

  /**
   * If the router has a state, then assign the state to the item variable.
   * @param {Router} router - Router - This is the router service that we imported earlier.
   */
  constructor(private router: Router) {
    let i = this.router.getCurrentNavigation()?.extras.state;
    console.log("hello", i);
    
    if (i)
      this.item = i;
  }

  ngOnInit(): void {
  }

}
