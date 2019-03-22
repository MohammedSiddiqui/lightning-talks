import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { GifStoreItem } from '../../interfaces/gif-store';
import { CollectionWrapper } from '../../angular-fire/collection-wrapper';

@Injectable({
  providedIn: 'root',
})
export class GifStoreService extends CollectionWrapper<GifStoreItem> {
  constructor(
    angularFirestore: AngularFirestore,
  ) {
    super('gifstore', angularFirestore);
  }
}
