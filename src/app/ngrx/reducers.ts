import {vinylReducer} from "./vinyl/vinyl.reducer";
import {applicationReducer} from "./application/application.reducer";

export const StoreReducers = {
    Application: applicationReducer,
    Vinyl: vinylReducer
};
