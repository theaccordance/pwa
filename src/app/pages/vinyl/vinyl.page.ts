import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {RootState} from "../../ngrx/state";
import {Observable} from "rxjs";
import {VinylRecord, VinylState} from "../../ngrx/vinyl/vinyl.model";
import {BackendService} from "../../backend.service";
import {GetVinylRecordsResponse} from "../../ngrx/vinyl/vinyl.actions";
import {DismissLoader, ShowLoader} from "../../ngrx/application/application.actions";

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.page.html',
  styleUrls: ['./vinyl.page.scss'],
})
export class VinylPage implements OnInit {
  viewModel$: Observable<VinylState>;

  constructor(private store: Store<RootState>, private backend: BackendService) {
    this.viewModel$ = this.store.select((state: RootState) => state.Vinyl);
  }

  ngOnInit() {
    this.store.dispatch(new ShowLoader());
    this.backend.getVinyls().subscribe((res: any) => {
      const records = res.data.map((record) => {
        const vinylRecord: VinylRecord = {
          artist: record.attributes.artist,
          releaseId: record.attributes.release_id,
          thumbnail: record.attributes.thumbnail_image_url,
          title: record.attributes.title,
          vinylId: record.id,
          year: record.attributes.year
        };
        return vinylRecord;
      });
      this.store.dispatch(new GetVinylRecordsResponse(records));
      return this.store.dispatch(new DismissLoader());
    });
  }

}
