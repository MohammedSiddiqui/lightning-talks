import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUserCredentials } from './angular-fire';

@Injectable({
  providedIn: 'root',
})
export class AngularFireAuthService {

  constructor(
    private fireAuth: AngularFireAuth,
  ) { }

  signIn(token: string): Promise<FirebaseUserCredentials> {
    return this.fireAuth.auth.signInWithCustomToken(token);
  }

  signOut(): Promise<void> {
    return this.fireAuth.auth.signOut();
  }
}
