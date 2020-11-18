import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcrtestPage } from './pcrtest.page';

const routes: Routes = [
  {
    path: '',
    component: PcrtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcrtestPageRoutingModule {}
