import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import {map} from 'rxjs/operators';
import firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userEmail: string;
  userId: string;
  users: any;
  names: any;
  address: any;
  phones: any;
  niks: any;


  mainuser: AngularFirestoreDocument;
  profilePic: any;
  sub: any;


  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    public afDatabase: AngularFireDatabase

  ) { }

  ngOnDestroy(){
    this.sub.unsubscribe();
}

  ngOnInit() {

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
