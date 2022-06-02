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
        path: 'press',
        loadChildren: () => import('../../pages/press/press.module').then( m => m.PressPageModule)
      },
      {
        path: 'postcard',
        loadChildren: () => import('../../pages/postcard/postcard.module').then( m => m.PostcardPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'vinyl',
        loadChildren: () => import('../../pages/vinyl/vinyl.module').then( m => m.VinylPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopPageRoutingModule {}
