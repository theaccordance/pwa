import { Component, OnInit } from '@angular/core';
import {FeatureFlag} from "../../ngrx/application/application.model";
import {Store} from "@ngrx/store";
import {RootState} from "../../ngrx/state";
import {Observable} from "rxjs";

export interface DesktopViewModel {
  features: FeatureFlag[];
}

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.page.html',
  styleUrls: ['./desktop.page.scss'],
})
export class DesktopPage implements OnInit {
  features$: Observable<FeatureFlag[]>;
  constructor(private store: Store<RootState>) {
    this.features$ = this.store.select((state: RootState) => state.Application.features);
  }

  ngOnInit() {
  }

}
