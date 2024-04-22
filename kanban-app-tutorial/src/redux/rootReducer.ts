import { combineReducers } from "@reduxjs/toolkit";
import { fireStoreApi } from "./services/apiSlice";
import featureReducer from "./features/appSlice";

export const rootReducer = combineReducers({
    features: featureReducer,
    [fireStoreApi.reducerPath]: fireStoreApi.reducer,
});