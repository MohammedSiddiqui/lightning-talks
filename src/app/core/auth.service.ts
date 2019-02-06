import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly BASE_URL = 'http://10.0.0.159:1234/';
  readonly data = {
    data: {
      type: 'auths',
      attributes: { 'userName': 'dayem.siddiqui', 'password': '10pearls1+', 'keepMeLoggedIn': true },
    },
    included: [],
  };

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };



  constructor(private http: HttpClient) {
  }


  loginUser(user) {
    this.http
      .post(this.BASE_URL + 'api/auth/login', this.data, this.httpOptions)
      .subscribe(response => response);

  }
}
