import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Rumahsakit } from '../rumahsakit';
import { Booking } from '../booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private dbPath = '/booking';
  bookingRef: AngularFireList<Booking> = null;

  constructor(private db: AngularFireDatabase) {
    this.bookingRef = db.list(this.dbPath);
   }

  getAll(): AngularFireList<Booking>{
    return this.bookingRef;
  }

  create(booking: Booking): any{
    return this.bookingRef.push(booking);
  }

  delete(key: string): Promise<void> {
    return this.bookingRef.remove(key);
  }
  
}
