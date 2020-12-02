import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Rumahsakit } from '../rumahsakit';

@Injectable({
  providedIn: 'root'
})
export class RumahsakitService {

  private dbPath = '/rumahsakit';
  rumahsakitRef: AngularFireList<Rumahsakit> = null;

  constructor(private db: AngularFireDatabase) {
    this.rumahsakitRef = db.list(this.dbPath);
   }

   getAll(): AngularFireList<Rumahsakit>{
    return this.rumahsakitRef;
  }

  create(rumahsakit: Rumahsakit): any{
    return this.rumahsakitRef.push(rumahsakit);
  }

  delete(key: string): Promise<void> {
    return this.rumahsakitRef.remove(key);
  }
}
