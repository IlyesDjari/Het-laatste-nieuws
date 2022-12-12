import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = 'c0d1e2611b69455ea759119d9ba8a35a';
  baseUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news";

  constructor(private http: HttpClient) { }


  /**
   * It returns an Observable of type any
   * @returns Observable&lt;any&gt;
   */
  getLatestNews(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}&apikey=${this.api_key}`);
  }
}
