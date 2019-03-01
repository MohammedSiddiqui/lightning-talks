import { NgModule } from '@angular/core';
import { AngularFireModule as AngularFire2Module } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
})
export class AngularFireModule { }
