import { NgModule } from '@angular/core';
import { AngularFireModule as AngularFire2Module } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    AngularFire2Module.initializeApp(environment.firebaseCredentials),
  ],
  exports: [
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  // TODO: Temporary fix as recommended by https://github.com/angular/angularfire2/issues/1993
  providers: [
    {provide: FirestoreSettingsToken, useValue: {}},
  ],
})
export class AngularFireModule { }
