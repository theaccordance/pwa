import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopPage } from './desktop.page';

import { routes as appRoutes } from '../../app-routing.module';

const children = appRoutes
  .filter((route) => route.path !== 'children')
  .filter((route) => !route.redirectTo)

const routes: Routes = [
  {
    path: '',
    component: DesktopPage,
    children
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopPageRoutingModule {}
