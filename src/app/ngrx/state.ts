import {VinylState} from "./vinyl/vinyl.model";
import {ApplicationState} from "./application/application.model";
import {PressState} from "./press/press.model";
import {PostcardState} from "./postcard/postcard.model";

export interface RootState {
    Application: ApplicationState,
    Postcard: PostcardState,
    Press: PressState;
    Vinyl: VinylState;
}
