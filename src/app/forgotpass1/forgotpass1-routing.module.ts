import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Forgotpass1Page } from './forgotpass1.page';

const routes: Routes = [
  {
    path: '',
    component: Forgotpass1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Forgotpass1PageRoutingModule {}
