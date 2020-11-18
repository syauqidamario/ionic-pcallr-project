import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerdekatPageRoutingModule } from './terdekat-routing.module';

import { TerdekatPage } from './terdekat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerdekatPageRoutingModule
  ],
  declarations: [TerdekatPage]
})
export class TerdekatPageModule {}
