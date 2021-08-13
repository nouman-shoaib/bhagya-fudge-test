import { Injectable } from '@angular/core';
import { ApiService } from './base.service';
import { Observable } from 'rxjs';

export interface News {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public baseService: ApiService) { }

  /**get news response */
  getNews() {
    return this.baseService.get<News[]>('users/1/posts');
  }
}
