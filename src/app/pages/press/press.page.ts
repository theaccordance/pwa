import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PressArticle, PressState} from "../../ngrx/press/press.model";
import {Store} from "@ngrx/store";
import {RootState} from "../../ngrx/state";
import {BackendService} from "../../backend.service";
import {DismissLoader, ShowLoader} from "../../ngrx/application/application.actions";
import {GetPressArticlesResponse} from "../../ngrx/press/press.actions";

@Component({
  selector: 'app-press',
  templateUrl: './press.page.html',
  styleUrls: ['./press.page.scss'],
})
export class PressPage implements OnInit {
  viewModel$: Observable<PressState>;

  constructor(private store: Store<RootState>, private backend: BackendService) {
    this.viewModel$ = this.store.select((state: RootState) => state.Press);
  }

  ngOnInit() {
    this.store.dispatch(new ShowLoader());
    this.backend.getPressArticles().subscribe((res: any) => {
      console.log(res);
      const articles = res.data.map((article) => {
        const pressArticle: PressArticle = {
          id: article.id,
          publisher: article.attributes.publisher,
          published_date: article.attributes.published_date,
          title: article.attributes.title,
          url: article.attributes.url
        };
        return pressArticle;
      });
      this.store.dispatch(new GetPressArticlesResponse(articles));
      return this.store.dispatch(new DismissLoader());
    });
  }

  openLink(url: string) {
    console.log(`Opening ${url}`);
    return window.open(url, "_blank");
  }

}
