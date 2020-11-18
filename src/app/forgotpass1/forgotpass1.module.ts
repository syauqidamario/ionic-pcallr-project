import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Forgotpass1PageRoutingModule } from './forgotpass1-routing.module';

import { Forgotpass1Page } from './forgotpass1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Forgotpass1PageRoutingModule
  ],
  declarations: [Forgotpass1Page]
})
export class Forgotpass1PageModule {}
