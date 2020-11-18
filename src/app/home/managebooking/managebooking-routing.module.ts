import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagebookingPage } from './managebooking.page';

const routes: Routes = [
  {
    path: '',
    component: ManagebookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagebookingPageRoutingModule {}
