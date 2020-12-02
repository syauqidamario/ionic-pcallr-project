import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RumahsakitService } from 'src/app/services/rumahsakit.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-terdekat',
  templateUrl: './terdekat.page.html',
  styleUrls: ['./terdekat.page.scss'],
})
export class TerdekatPage implements OnInit {

  rumahsakit: any;

  constructor(private rsSrv: RumahsakitService,
    private router: Router) { }

  ngOnInit()
  {
    this.rsSrv.getAll().snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(data => {
      this.rumahsakit = data;
      console.log(data);
    });
  }

}
