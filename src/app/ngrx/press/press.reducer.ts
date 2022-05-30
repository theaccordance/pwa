import {GetPressArticlesResponse, PressActions} from "./press.actions";
import {DEFAULT_PRESS_STATE, PressState} from "./press.model";

export function pressReducer(state: PressState = DEFAULT_PRESS_STATE, action) {
    switch (action.type) {
        case PressActions.GetArticlesResponse:
            return getArticlesResponse(state, action);
        default:
            return state;
    }
}

function getArticlesResponse(state: PressState, action: GetPressArticlesResponse): PressState {
    const newState: PressState = Object.assign({}, state);
    newState.articles = action.payload;
    return newState;
}
