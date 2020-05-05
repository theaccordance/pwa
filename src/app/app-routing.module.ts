import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {StoreReducers} from '../ngrx/reducers';

export const DEFAULT_CONTENT_PATH = 'dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: `desktop/${DEFAULT_CONTENT_PATH}`,
    pathMatch: 'full'
  },
  {
    path: DEFAULT_CONTENT_PATH,
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'desktop',
    loadChildren: () => import('./layouts/desktop/desktop.module').then(m => m.DesktopPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    StoreModule.forRoot(StoreReducers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
