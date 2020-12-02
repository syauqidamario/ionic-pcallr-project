import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.page.html',
  styleUrls: ['./register1.page.scss'],
})
export class Register1Page implements OnInit {

  // validations_form: FormGroup;
  // errorMessage: string = '';
  // successMessage: string = '';

  // validation_messages = {
  //   email: [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Enter a valid email.' }
  //   ],
  //   password: [
  //     { type: 'required', message: 'Password is required.' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
  //   ]
  // };

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    // this.validations_form = this.formBuilder.group({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required
    //   ]))
    // });
  }

  // tryRegister(value) {
  //   this.authSrv.registerUser(value)
  //     .then(res => {
  //       console.log(res);
  //       this.errorMessage = '';
  //       this.successMessage = 'Your account has been created. Please log in.';
  //       this.router.navigateByUrl('/login');

  //     }, err => {
  //       console.log(err);
  //       this.errorMessage = err.message;
  //       this.successMessage = '';
  //     });
  // }

  signUp(email, password, name, addres, phone, nik){
    this.authSrv.RegisterUser(email.value, password.value, name.value, addres.value, phone.value, nik.value)
        .then((res) => {
          // Do send verification email
          this.authSrv.SendVerificationMail()
          this.router.navigate(['/register2']);
        }).catch((error) => {
      window.alert(error.message)
    })
  }

  goLoginPage() {
    this.router.navigateByUrl('/login');
  }

}
