import {Action} from "@ngrx/store";
import {VinylRecord} from "./vinyl.model";

export const VINYL_ACTIONS = {
    GetVinylRecordsResponse: "Vinyl:GetRecordsResponse"
};

export class GetVinylRecordsResponse implements Action {
    readonly type = VINYL_ACTIONS.GetVinylRecordsResponse;

    constructor(public payload:  VinylRecord[] = null) {
    }
}
