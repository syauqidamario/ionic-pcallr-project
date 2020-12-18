import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RumahsakitService } from 'src/app/services/rumahsakit.service';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  imgURL;

  constructor(
    private router: Router,
    private rsSrv: RumahsakitService,
    private camera: Camera,

  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);

    this.rsSrv.create(form.value).then(res => {
      console.log(res);
      this.router.navigateByUrl('/home/tabs/main');
    }).catch(error => console.log(error));

    form.reset();
    this.router.navigateByUrl('/home/tabs/main');
  }

  getCamera(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res) => {
      this.imgURL = res;
    }).catch(e => {
      console.log(e);
    })

  }

  getGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) => {
      this.imgURL = res;
    }).catch(e => {
      console.log(e);
    })
  }
}
