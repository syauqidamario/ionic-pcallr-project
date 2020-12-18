import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authSrv.loginUser(email.value, password.value)
        .then((res) => {
          if(this.authSrv.isEmailVerified) {
            this.router.navigate(['home/tabs/main']);
          } else {
            window.alert('Email is not verified')
            return false;
          }
        }).catch((error) => {
      window.alert(error.message)
    })
  }

  goToRegisterPage() {
    this.router.navigateByUrl('/register1');
  }

  goToForgotPassPage() {
    this.router.navigateByUrl('/forgotpass1');
  }


}
