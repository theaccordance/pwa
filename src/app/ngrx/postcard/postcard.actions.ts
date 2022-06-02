import {Action} from '@ngrx/store';
import {Postcard} from "./postcard.model";

export const PostcardActions = {
    GetPostcardsResponse: "Postcard:GetPostcardsResponse",
    ToggleLayout: "Postcard:ToggleLayout"
}

export class GetPostcardsResponse implements Action {
    readonly type = PostcardActions.GetPostcardsResponse;
    constructor(public payload: Postcard[] = null) {}
}

export class TogglePostcardLayout implements Action {
    readonly type = PostcardActions.ToggleLayout;
}
