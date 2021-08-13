import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const baseUrl = environment.serverBaseUrl;
const apiEndpoint = environment.apiEndpoint;
const apiUrl = `${baseUrl}${apiEndpoint}`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

//   private createTokenOptions() {
//     return {headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)};
//   }

  get<T>(serviceEndpoint: string, id?: number): Observable<T> {
    let url = `${apiUrl}${serviceEndpoint}`;
    if (id) {
      url += `/${id}`;
    }
    //return this.http.get<T>(url, this.createTokenOptions());
    return this.http.get<T>(url);
  }

  create<T>(serviceEndpoint: string, item: T): Observable<object> {
    //const options = this.createTokenOptions();
    //options.headers = options.headers.append('Content-Type', 'application/json');
    return this.http.post(`${apiUrl}${serviceEndpoint}`, JSON.stringify(item));//, options);
  }

  delete<T>(serviceEndpoint: string, id: number): Observable<T> {
    return this.http.delete<T>(`${apiUrl}${serviceEndpoint}/${id}`);//, this.createTokenOptions());
  }
}