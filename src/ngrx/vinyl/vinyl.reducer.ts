import {Action} from '@ngrx/store';
import {VinylState, DEFAULT_VINYL_STATE} from "./vinyl.model";

export function vinylReducer(state: VinylState = DEFAULT_VINYL_STATE, action): VinylState {
    switch (action.type) {
        default:
            return state;
    }
}
