import {Action} from '@ngrx/store';
import {ApplicationActions} from './application.actions';
import {ApplicationState, DEFAULT_APPLICATION_STATE} from './application.model';


export function applicationReducer(state: ApplicationState = DEFAULT_APPLICATION_STATE, action): ApplicationState {
    switch (action.type) {
        // case ApplicationActions.PopToast:
        //     return popToast(state, action);
        // case ApplicationActions.ServeToast:
        //     return serveToast(state, action);
        case ApplicationActions.ShowLoader:
            return showLoader(state, action);
        case ApplicationActions.DismissLoader:
            return dismissLoader(state, action);
        default:
            return state;
    }
}

// function popToast(state: ApplicationState, action: PopToast): ApplicationState {
//     const newState: ApplicationState = Object.assign({}, state);
//     newState.toaster = action.payload;
//     return newState;
// }
//
// function serveToast(state: ApplicationState, action: Action): ApplicationState {
//     const newState: ApplicationState = Object.assign({}, state);
//     delete newState.toaster;
//     return newState;
// }

function showLoader(state: ApplicationState, action: Action): ApplicationState {
    const newState: ApplicationState = Object.assign({}, state);
    newState.isLoading = true;
    return newState;
}

function dismissLoader(state: ApplicationState, action: Action): ApplicationState {
    const newState: ApplicationState = Object.assign({}, state);
    newState.isLoading = false;
    return newState;
}
