import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  databooking: any;
  userEmail: string;
  userId: string;
  users: any;
  names: any;
  address: any;
  phones: any;
  niks: any;

  constructor(
    private bookSrv: BookingService,
    private authSrv: AuthService,
    public afDatabase: AngularFireDatabase,
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

  this.authSrv.getUserData().snapshotChanges().pipe(
    map(changes =>
        changes.map(c => ({user_id: c.payload.key, ...c.payload.val()}))
    )
).subscribe(() => {
  this.userId = firebase.auth().currentUser.uid;
  console.log('USER ID CURRENT', this.userId);
  this.afDatabase.database.ref('users/' + this.userId).once('value').then( userDetailsAsObject => {

    this.names = userDetailsAsObject.val().names;
    this.userEmail = userDetailsAsObject.val().emails;
    this.address = userDetailsAsObject.val().address;
    this.phones = userDetailsAsObject.val().phones;
    this.niks = userDetailsAsObject.val().niks;


  }).catch( err => {
    console.log('Error pulling /profile table inside functionName() inside componentName.component.ts');
    console.log(err);
  });
});
  }
}
