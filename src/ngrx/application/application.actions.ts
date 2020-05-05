import {Action} from "@ngrx/store";
import {Toast} from './application.model';

export const ApplicationActions = {
  DismissLoader: 'Application:DismissLoader',
  PopToast: 'Application:PopToast',
  ServeToast: 'Application:ServeToast',
  ShowLoader: 'Application:ShowLoader'
};

export class PopToast implements Action {
  readonly type = ApplicationActions.PopToast;
  constructor(public payload: Partial<Toast>) {}
}

export class ServeToast implements Action {
  readonly type = ApplicationActions.ServeToast;
}


