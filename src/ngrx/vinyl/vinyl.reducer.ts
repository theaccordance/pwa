import {Action} from '@ngrx/store';
import {VinylState, DEFAULT_VINYL_STATE} from "./vinyl.model";
import {GetVinylRecordsResponse, VINYL_ACTIONS} from "./vinyl.actions";

export function vinylReducer(state: VinylState = DEFAULT_VINYL_STATE, action): VinylState {
    switch (action.type) {
        case VINYL_ACTIONS.GetVinylRecordsResponse:
            return getVinylRecordsResponse(state, action);
        default:
            return state;
    }
}

function getVinylRecordsResponse(state: VinylState, action: GetVinylRecordsResponse): VinylState {
    const newState: VinylState = Object.assign({}, state);
    newState.records = action.payload;
    return newState;
}
