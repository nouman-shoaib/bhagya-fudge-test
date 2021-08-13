import { Injectable } from '@angular/core';
import { ApiService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public baseService: ApiService) { }
  /**get users response */
  getUsers() {
    return this.baseService.get<any>('users');
  }
}
