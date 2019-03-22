import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { CollectionWrapper } from '../../angular-fire/collection-wrapper';
import { Talk } from '../../interfaces/talk';

@Injectable({
  providedIn: 'root',
})
export class TalkService extends CollectionWrapper<Talk> {
  constructor(
    angularFirestore: AngularFirestore,
  ) {
    super('talks', angularFirestore);
  }
}
