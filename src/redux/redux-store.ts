import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers ({
    profile: profileReducer
})

// //type of all actions
// export type AppActionsType = any
//
// //if we want to use thunk inside thunk we need to use this type
// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export default store;