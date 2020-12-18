import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActionSheetController, AlertController, LoadingController, NavController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import {map} from 'rxjs/operators';
import { finalize } from "rxjs/operators";
import { Camera, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';
import firebase from 'firebase';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

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
  private isDesktop: boolean;
  private downloadURL: any;
  private imageFile: any;
  private base64Image: any;
  private boolCamera: boolean = null;
  private photo: SafeResourceUrl;
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    public afDatabase: AngularFireDatabase,
    private storage: AngularFireStorage,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private platform: Platform,
    private sanitizer: DomSanitizer,

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
    this.getId();
  }

  getId(){
    this.authSrv.userDetails().subscribe(res => {
      if(res !== null){
        this.userId = res.uid;
        this.getUser();
      }
    }, err => {
      console.log(err);
    })
  }

  getUser(){
    this.afDatabase.object('/users/' + this.userId).valueChanges().subscribe(data => {
      this.users = data;
      if(this.users.foto){
        this.photo = this.users.foto;
      }
    })
  }

  async getPicture(type: string){
    if(!Capacitor.isPluginAvailable('Camera') || (this.isDesktop && type === 'gallery')){
      this.filePickerRef.nativeElement.click();
      return;
    }

    const image = await Camera.getPhoto({
      quality: 100,
      width: 500,
      height: 500,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && ("data:image/png;base64," + image.base64String));
    this.boolCamera = true;
    this.base64Image = image.base64String;

    this.uploadImage();
  }

  onFileChoose(event){
    const file = event.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if(!file.type.match(pattern)){
      console.log('Format File Tidak Support.');
      this.imageFile = null;
      return;
    }

    reader.onload = () => {
      this.photo = reader.result.toString();
    }
    reader.readAsDataURL(file);
    this.boolCamera = false;
    this.imageFile = file;

    this.uploadImage();
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      animated: true,
      mode: 'ios',
      buttons: [
      {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.getPicture('camera');
        }
      },
      {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.getPicture('gallery');
        }
      }]
    });

    await actionSheet.present();
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
        message: "Update Profile Picture",
        duration: 3000
    });
    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log("Loading Dismissed.");
  }

  uploadImage(){
    this.presentLoading().then(() =>{
      var n = Date.now();
      const filePath = `Profil/${n}`;
      const fileRef = this.storage.ref(filePath);
      var task;
      if(this.boolCamera){
        task = fileRef.putString(this.base64Image, 'base64',
        { 
          contentType: 'image/png' });
      }

      else{
        task = this.storage.upload(`Profil/${n}`, this.imageFile);
      }

      task.snapshotChanges()
          .pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe(url => {
                if (url) 
                {
                  this.downloadURL = url;
                  this.users.foto = this.downloadURL;
                  this.authSrv.update(this.userId, this.users);
                }
              });
            })
          ).subscribe();
    });
  }

  imageLoaded(){
    setTimeout(function() {
      var profileWidth = document.getElementById('profilePicture').offsetWidth;
      document.getElementById('profilePicture').style.height = profileWidth + "px";
    }, 10)
  }
}