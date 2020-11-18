import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Forgotpass2Page } from './forgotpass2.page';

const routes: Routes = [
  {
    path: '',
    component: Forgotpass2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Forgotpass2PageRoutingModule {}
