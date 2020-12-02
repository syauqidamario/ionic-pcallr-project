import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RumahsakitService } from 'src/app/services/rumahsakit.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  loadedRs: any;
  key: string;
  rumahsakitSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private rsSrv: RumahsakitService,
    private alertController: AlertController,
    private router: Router,
    private db: AngularFireDatabase

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('key')) {return;}
      const key = paramMap.get('key');
      this.key = key;

      this.loadedRs = this.db.object('/rumahsakit/' + key).valueChanges().subscribe(data => {
        console.log('data: ', data);
        this.loadedRs = data;
        console.log('this.loadedRs: ', this.loadedRs);
      });
    });
  }
}
