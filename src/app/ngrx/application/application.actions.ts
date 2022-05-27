import {Action} from '@ngrx/store';

export const ApplicationActions = {
    DismissLoader: 'Application:DismissLoader',
    PopToast: 'Application:PopToast',
    ServeToast: 'Application:ServeToast',
    ShowLoader: 'Application:ShowLoader'
};

// export class PopToast implements Action {
//     readonly type = ApplicationActions.PopToast;
//     constructor(public payload: Partial<Toast>) {}
// }
//
// export class ServeToast implements Action {
//     readonly type = ApplicationActions.ServeToast;
// }

export class ShowLoader implements Action {
    readonly type = ApplicationActions.ShowLoader;
}

export class DismissLoader implements Action {
    readonly type = ApplicationActions.DismissLoader;
}


