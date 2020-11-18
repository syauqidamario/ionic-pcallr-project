import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagebookingPageRoutingModule } from './managebooking-routing.module';

import { ManagebookingPage } from './managebooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagebookingPageRoutingModule
  ],
  declarations: [ManagebookingPage]
})
export class ManagebookingPageModule {}
