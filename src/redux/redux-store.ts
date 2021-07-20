import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers ({
    profile: profileReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export default store;