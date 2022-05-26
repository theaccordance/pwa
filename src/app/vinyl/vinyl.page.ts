import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {RootState} from "../../ngrx/state";
import {Observable} from "rxjs";
import {VinylState} from "../../ngrx/vinyl/vinyl.model";

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.page.html',
  styleUrls: ['./vinyl.page.scss'],
})
export class VinylPage implements OnInit {
  viewModel$: Observable<VinylState>;

  constructor(private store: Store<RootState>) {
    this.viewModel$ = this.store.select((state: RootState) => state.Vinyl);
  }

  ngOnInit() {
  }

}
