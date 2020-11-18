import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/tabs/main',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'terdekat',
        loadChildren: () => import('./terdekat/terdekat.module').then( m => m.TerdekatPageModule)
      },
      {
        path: 'managebooking',
        loadChildren: () => import('./managebooking/managebooking.module').then( m => m.ManagebookingPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'tercepat',
        loadChildren: () => import('./tercepat/tercepat.module').then( m => m.TercepatPageModule)
      },
      {
        path: 'pcrtest',
        loadChildren: () => import('./pcrtest/pcrtest.module').then( m => m.PcrtestPageModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: 'booking',
        loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
      },
      {
        path: 'main',
        loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
