import { Component } from '@angular/core';

import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Observable} from 'rxjs';
import {BASE_TOAST, Toast} from '../ngrx/application/application.model';
import {Store} from "@ngrx/store";
import {RootState} from '../ngrx/state';
import {ServeToast} from '../ngrx/application/application.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  $toaster: Observable<Partial<Toast>>;
  $isLoading: Observable<boolean>;
  private loader: any = null;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<RootState>,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
    this.initializeApp();
    // tslint:disable-next-line:no-shadowed-variable
    this.$toaster = this.store.select(store => store.Application.toaster);
    this.$isLoading = this.store.select(store => store.Application.isLoading);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.$toaster.subscribe(async (bread) => {
        if (!bread) {
          return;
        }
        const options = Object.assign({}, BASE_TOAST, bread);
        const toaster = await this.toastCtrl.create(options);
        return toaster.present().then(complete => {
          return this.store.dispatch(new ServeToast());
        });
      });
      this.$isLoading.subscribe(async (showLoader) => {
        if (showLoader && !this.loader) {
          this.loader = await this.loadingCtrl.create({spinner: 'crescent'});
          return this.loader.present();
        }
        // tslint:disable-next-line:no-unused-expression
        this.loader && this.loader.dismiss();
        return this.loader = null;
      });
    });
  }
}
