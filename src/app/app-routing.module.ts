import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'desktop',
    pathMatch: 'full'
  },
  {
    path: 'vinyl',
    loadChildren: () => import('./pages/vinyl/vinyl.module').then( m => m.VinylPageModule)
  },
  {
    path: 'desktop',
    loadChildren: () => import('./layouts/desktop/desktop.module').then( m => m.DesktopPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'press',
    loadChildren: () => import('./pages/press/press.module').then( m => m.PressPageModule)
  },
  {
    path: 'postcard',
    loadChildren: () => import('./pages/postcard/postcard.module').then( m => m.PostcardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
