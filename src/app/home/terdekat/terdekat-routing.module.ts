import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerdekatPage } from './terdekat.page';

const routes: Routes = [
  {
    path: '',
    component: TerdekatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerdekatPageRoutingModule {}
