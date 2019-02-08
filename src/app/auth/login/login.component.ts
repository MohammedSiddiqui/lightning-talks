import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../core/auth/auth.service';
import { maxLengthField, minLengthField, patternField, requiredField } from '../../constants/form-validation-messages.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
  ) {}

  userNameFieldName = 'Name';
  passwordFieldName = 'Password';

  userNameMinLength = 3;
  userNameMaxLength = 100;

  userLoginAttempt = false;

  loginForm = this.fb.group({
    'userName': ['', Validators.compose(
      [
        Validators.required,
        Validators.minLength(this.userNameMinLength),
        Validators.maxLength(this.userNameMaxLength),
        Validators.pattern(/^[a-zA-Z0-9.]*$/),
      ],
    )],
    'password': [null, Validators.compose(
      [
        Validators.required,
      ],
    )],
  });

  loginFormValidationMessages = {
    'userName': [
      requiredField(this.userNameFieldName),
      minLengthField(this.userNameFieldName, this.userNameMinLength),
      maxLengthField(this.userNameFieldName, this.userNameMaxLength),
      patternField(this.userNameFieldName, 'no special characters'),
    ],
    'password': [
      requiredField(this.passwordFieldName),
    ],
  };

  ngOnInit() {
  }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin () {
    this.userLoginAttempt = true;

    if (this.loginForm.valid) {
      const userData = {userName: this.userName.value, password: this.password.value};
      this.auth.userLogin(userData)
        .subscribe((response) => {
          this.auth.processUserLogin(response);
        });
    }
  }

}
