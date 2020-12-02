import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  userRef: AngularFireList<User> = null;

  user_id;
  email;
  addres;
  phone;
  nik;

  name;
  id;

  private afAuth: any;

  constructor(public fireAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public router: Router,
    public ngZone: NgZone,
    public db: AngularFireDatabase
    ) { 
      this.userRef = db.list('users/');
      this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'))
      }
    });
    }

  // registerUser(value){
  //   return new Promise<any>((resolve, reject) => {
  //     this.fireAuth.createUserWithEmailAndPassword(value.email, value.password)
  //     .then(
  //       res => resolve(res),
  //       err => reject(err)
  //     );
  //   });
  // }

  RegisterUser(email, password, name, addres, phone, nik) {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      if (user) {
        console.log(user);
        this.user_id = user['user'].uid;
        this.email = user['user'].email;

        // inserting into database
        firebase.database().ref('users/' + this.user_id).set({
          names: name,
          address: addres,
          phones: phone,
          niks: nik,
          emails: email,
        }, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log('New User Saved');
          }
        });
      }
      return user;
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      return errorMessage;
      // ...
    });
  }

  SendVerificationMail() {
    return firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
          this.router.navigate(['/register2']);
        })
  }

  loginUser(email, password){
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  userDetails(){
    return this.fireAuth.user;
  }
  
  logoutUser() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    })
  }

  // isSignedIn() {
  //   return this.fireAuth.currentUser ? true : false;
  // }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  PasswordRecover(passwordResetEmail) {
    return this.fireAuth.sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          window.alert('Password reset email has been sent, please check your inbox.');
        }).catch((error) => {
          window.alert(error)
        })
  }

  getUserData(): AngularFireList<User> {
    return this.userRef;
  }

  updatePassword(newpassword: string){
    return this.afAuth.auth.currentUser.updatePassword(newpassword)
  }

  updateEmail(newemail: string){
    return this.afAuth.Auth.currentUser.updateEmail(newemail)
  }

}
