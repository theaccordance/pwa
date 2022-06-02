import {DEFAULT_POSTCARD_STATE, PostcardState} from "./postcard.model";
import {GetPostcardsResponse, PostcardActions, TogglePostcardLayout} from "./postcard.actions";

export function postcardReducer(state: PostcardState = DEFAULT_POSTCARD_STATE, action): PostcardState {
    switch (action.type) {
        case PostcardActions.GetPostcardsResponse:
            return getPostcardsResponse(state, action);
        case PostcardActions.ToggleLayout:
            return toggleLayout(state, action);
        default:
            return state;
    }
}

function getPostcardsResponse(state: PostcardState, action: GetPostcardsResponse): PostcardState {
    const newState = Object.assign({}, state);
    newState.postcards = action.payload;
    return newState;
}

function toggleLayout(state: PostcardState, action: TogglePostcardLayout): PostcardState {
    const newState = Object.assign({}, state);
    newState.displayList = !state.displayList;
    return newState
}
