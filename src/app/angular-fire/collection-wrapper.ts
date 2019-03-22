import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export class CollectionWrapper<T> {
  private readonly _collection: AngularFirestoreCollection<T>;

  constructor(
    collectionName,
    private angularFirestore: AngularFirestore,
  ) {
    this._collection = this.angularFirestore.collection<T>(collectionName);
  }

  get collection(): AngularFirestoreCollection<T> {
    return this._collection;
  }

  get items(): Observable<T[]> {
    return this._collection.valueChanges();
  }
}
