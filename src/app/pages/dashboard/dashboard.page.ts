import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {RootState} from '../../../ngrx/state';
import {PopToast, ShowLoader} from '../../../ngrx/application/application.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private store: Store<RootState>) { }

  ngOnInit() {
  }

  popToast() {
    return this.store.dispatch(new ShowLoader());
  }
}
