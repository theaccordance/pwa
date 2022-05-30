import {VinylState} from "./vinyl/vinyl.model";
import {ApplicationState} from "./application/application.model";
import {PressState} from "./press/press.model";

export interface RootState {
    Application: ApplicationState,
    Press: PressState;
    Vinyl: VinylState;
}
