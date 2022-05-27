import { Component } from '@angular/core';
import {LoadingController} from "@ionic/angular";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {RootState} from "../ngrx/state";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  $isLoading: Observable<boolean>;
  private loader: any = null;
  constructor(private store: Store<RootState>, private loadingCtrl: LoadingController) {
    this.$isLoading = this.store.select(store => store.Application.isLoading);
    this.init();
  }

  init() {
    this.$isLoading.subscribe(async (showLoader) => {
      if (showLoader && !this.loader) {
        this.loader = await this.loadingCtrl.create({spinner: 'crescent'});
        return this.loader.present();
      }

      // tslint:disable-next-line:no-unused-expression
      this.loader && this.loader.dismiss();
      return this.loader = null;
    });
  }
}
