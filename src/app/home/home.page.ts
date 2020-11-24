import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  userEmail: string;
  userID: string;
  isLoggedIn: boolean;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private authSrv: AuthService
  ) {setInterval(res => {
    this.isLoggedIn = localStorage.getItem('login') == null ? false : true;
  }, 1);}

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
  
  login() {
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.authSrv.logoutUser()
      .then(res => {
        console.log(res);
        this.router.navigateByUrl('/login');
      })
      .catch(error => {
        console.log(error);
      });
  }

}
