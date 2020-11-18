import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwalPage } from './awal.page';

const routes: Routes = [
  {
    path: '',
    component: AwalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwalPageRoutingModule {}
