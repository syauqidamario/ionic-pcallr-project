import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RumahsakitService } from 'src/app/services/rumahsakit.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor(
    private router: Router,
    private rsSrv: RumahsakitService
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

}
