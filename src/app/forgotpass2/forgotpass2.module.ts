import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Forgotpass2PageRoutingModule } from './forgotpass2-routing.module';

import { Forgotpass2Page } from './forgotpass2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Forgotpass2PageRoutingModule
  ],
  declarations: [Forgotpass2Page]
})
export class Forgotpass2PageModule {}
