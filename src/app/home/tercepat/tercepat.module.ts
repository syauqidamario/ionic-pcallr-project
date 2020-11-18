import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercepatPageRoutingModule } from './tercepat-routing.module';

import { TercepatPage } from './tercepat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercepatPageRoutingModule
  ],
  declarations: [TercepatPage]
})
export class TercepatPageModule {}
