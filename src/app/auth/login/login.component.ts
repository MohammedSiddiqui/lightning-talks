import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  readonly login;
  user = {
    name: '',
    password: '',
  };

  constructor(private auth: AuthService) {
   }

  ngOnInit() {
  }

  onLoginButtonClicked () {
    // this.login(this.user);
    this.auth.loginUser(this.user);
  }

}
