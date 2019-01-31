import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  loginUser (userCredentials) {
    console.log('User Credentials', userCredentials);
  }
}
