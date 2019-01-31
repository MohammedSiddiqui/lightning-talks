import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onLoginButtonClicked () {
    console.log('Login Button was clicked. Calling the Auth Service');
    this.auth.loginUser({username: 'dayem', password: '1234'})
  }

}
