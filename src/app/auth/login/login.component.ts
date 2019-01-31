import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoginButtonClicked () {
    console.log('Login Button was clicked. Calling the Auth Service');
  }

}
