import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GoogleMap} from '@capacitor/google-maps';
import {Store} from "@ngrx/store";
import {RootState} from "../../ngrx/state";
import {BackendService} from "../../backend.service";
import {Observable} from "rxjs";
import {Postcard, PostcardState} from "../../ngrx/postcard/postcard.model";
import {GetPostcardsResponse, TogglePostcardLayout} from "../../ngrx/postcard/postcard.actions";
import {DismissLoader, ShowLoader} from "../../ngrx/application/application.actions";


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.page.html',
  styleUrls: ['./postcard.page.scss'],
})
export class PostcardPage implements OnInit {
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  private apiKey: string = "AIzaSyDSOukJe1IMF6UEHoz0HCmPmJprAbSYuYM";

  viewModel$: Observable<PostcardState>;
  displayList$: Observable<boolean>;

  constructor(private store: Store<RootState>, private backend: BackendService) {
    this.viewModel$ = this.store.select((state: RootState) => state.Postcard);
    this.displayList$ = this.store.select((state: RootState) => state.Postcard.displayList);
  }

  async ngOnInit() {
    // this.store.dispatch(new ShowLoader());
    this.backend.getPostcards().subscribe((res: any) => {
      const postcards = res.data.map((item) => {
        const postcard: Postcard = {
          id: item.id,
          destination: item.attributes.destination,
          location: item.attributes.location,
          date: item.attributes.date,
          image: item.attributes.cover_image.data.attributes.formats.large.url
        };
        return postcard;
      });
      this.store.dispatch(new GetPostcardsResponse(postcards));
      // return this.store.dispatch(new DismissLoader());
    });
  }

  async ngAfterViewInit() {
    this.newMap = await GoogleMap.create({
      id: 'map',
      element: this.mapRef.nativeElement,
      apiKey: this.apiKey,
      config: {
        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 2,
      },
    });

    const marker = await this.newMap.addMarker({
      coordinate: {
        lat: 41.878113,
        lng: -87.629799
      },
      title: "Chicago",
      iconUrl: "http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_orange.png"
    });

    await this.newMap.setOnMapClickListener((event) => console.log("setOnMapClickListener", event));
    await this.newMap.setOnMarkerClickListener((event) => console.log("setOnMarkerClickListener", event));
  }

  toggleLayout() {
    return this.store.dispatch(new TogglePostcardLayout());
  }

}
