import {vinylReducer} from "./vinyl/vinyl.reducer";
import {applicationReducer} from "./application/application.reducer";
import {pressReducer} from "./press/press.reducer";
import {postcardReducer} from "./postcard/postcard.reducer";

export const StoreReducers = {
    Application: applicationReducer,
    Postcard: postcardReducer,
    Press: pressReducer,
    Vinyl: vinylReducer
};
