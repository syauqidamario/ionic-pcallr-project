import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.page.html',
  styleUrls: ['./managebooking.page.scss'],
})
export class ManagebookingPage implements OnInit {
  databooking: any;
  constructor(
    private bookSrv: BookingService,
  ) { }

  ngOnInit() {  
    this.bookSrv.getAll().snapshotChanges().pipe(
      map(changes =>
          changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
  ).subscribe(data => {
    this.databooking = data;
    console.log(data);
  });
  }

  delete(event, key) {
    this.bookSrv.delete(key).then(res => {
      console.log(res);
    });
  }

}
