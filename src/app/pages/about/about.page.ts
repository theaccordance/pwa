import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {RootState} from '../../../ngrx/state';
import {Manifest} from '../../../ngrx/application/application.model';
import {AboutViewModel, mapToAboutVM} from '../../../ngrx/application/application.selector';

interface Content {
  version: string;
  sha: string;
  github: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  $manifest: Observable<AboutViewModel>;
  constructor(
    private store: Store<RootState>
  ) {
    this.$manifest = this.store.select(mapToAboutVM);
  }

  ngOnInit() {
  }

}
