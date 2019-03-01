import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AppTeamService {
  // private teamCollection: AngularFirestoreCollection<>
  constructor(
    private angularFirestore: AngularFirestore,
  ) {

  }
}
