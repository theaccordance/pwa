import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopPage } from './desktop.page';

const routes: Routes = [
  {
    path: '',
    component: DesktopPage,
    children: [
      {
        path: 'about',
        loadChildren: () => import('../../pages/about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopPageRoutingModule {}
