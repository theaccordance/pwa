import {vinylReducer} from "./vinyl/vinyl.reducer";
import {applicationReducer} from "./application/application.reducer";
import {pressReducer} from "./press/press.reducer";

export const StoreReducers = {
    Application: applicationReducer,
    Press: pressReducer,
    Vinyl: vinylReducer
};
