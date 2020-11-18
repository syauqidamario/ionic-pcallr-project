import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'awal',
    pathMatch: 'full'
  },
  {
    path: 'awal',
    loadChildren: () => import('./awal/awal.module').then( m => m.AwalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register1',
    loadChildren: () => import('./register1/register1.module').then( m => m.Register1PageModule)
  },
  {
    path: 'register2',
    loadChildren: () => import('./register2/register2.module').then( m => m.Register2PageModule)
  },
  {
    path: 'forgotpass1',
    loadChildren: () => import('./forgotpass1/forgotpass1.module').then( m => m.Forgotpass1PageModule)
  },
  {
    path: 'forgotpass2',
    loadChildren: () => import('./forgotpass2/forgotpass2.module').then( m => m.Forgotpass2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
