import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUser(email: string, token: string): Observable<User> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + token);
    
    return this.http.get<User>(this.apiUrl + 'users/' + email, {
      headers: headers
    });
  }

  addUser(name: string, email: string, password: string, notifications: boolean): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'users', {
      name: name,
      email: email,
      password: password,
      notifications: notifications
    });
  }
}
