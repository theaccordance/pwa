import {VinylState} from "./vinyl/vinyl.model";
import {ApplicationState} from "./application/application.model";

export interface RootState {
    Application: ApplicationState,
    Vinyl: VinylState;
}
