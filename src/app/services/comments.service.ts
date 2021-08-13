import { Injectable } from '@angular/core';
import { ApiService } from './base.service';

export interface Comments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(public baseService: ApiService) { }
  /**get comments response */
    getComments() {
      return this.baseService.get<Comments[]>('posts/1/comments');
    }
}
