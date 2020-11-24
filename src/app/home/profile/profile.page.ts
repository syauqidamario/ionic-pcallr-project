import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userEmail: string;
  userID: string;

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService
  ) { }

  ngOnInit() {
    this.authSrv.userDetails().subscribe(res => {
      console.log('res:', res);
      console.log('uid: ', res.uid);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log(err);
    });
  }

}
