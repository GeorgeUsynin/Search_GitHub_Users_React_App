import { applyMiddleware } from "redux";
import {combineReducers, createStore} from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import {ProfileActionsType, profileReducer} from "./profile-reducer";


const rootReducer = combineReducers ({
    profile: profileReducer
})

//type of all actions
export type AppActionsType = ProfileActionsType

//if we want to use thunk inside thunk we need to use this type
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

const store = createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export default store;