import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }

  loginUser(userCredentials) {
    return console.log('User Credentials', userCredentials);
  }
}
