import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RumahsakitService } from 'src/app/services/rumahsakit.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  rumahsakit: any;
  userEmail: string;
  userID: string;
  isLoggedIn: boolean;

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    private rsSrv: RumahsakitService,
    private router: Router
  ) {setInterval(res => {
    this.isLoggedIn = localStorage.getItem('login') == null ? false : true;
  }, 1);}

  ngOnInit() {
    // this.authSrv.userDetails().subscribe(res => {
    //   console.log('res:', res);
    //   console.log('uid: ', res.uid);
    //   if (res !== null) {
    //     this.userEmail = res.email;
    //   } else {
    //     this.navCtrl.navigateBack('');
    //   }
    // }, err => {
    //   console.log(err);
    // });
    this.rsSrv.getAll().snapshotChanges().pipe(
      map(changes =>
          changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
  ).subscribe(data => {
    this.rumahsakit = data;
    console.log(data);
  });
}

  // login() {
  //   this.router.navigateByUrl('/login');
  // }

  logout() {
    this.authSrv.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('/login');
      })
      .catch(error => {
        console.log(error);
      });
  }

}
