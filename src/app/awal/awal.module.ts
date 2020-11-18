import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwalPageRoutingModule } from './awal-routing.module';

import { AwalPage } from './awal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwalPageRoutingModule
  ],
  declarations: [AwalPage]
})
export class AwalPageModule {}
