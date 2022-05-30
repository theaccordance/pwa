import {Action} from '@ngrx/store';
import {PressArticle} from "./press.model";

export const PressActions = {
    GetArticlesResponse: "Press:GetArticlesResponse"
};

export class GetPressArticlesResponse implements Action {
    readonly type = PressActions.GetArticlesResponse;

    constructor(public payload: PressArticle[] = null) {}
}
