import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {ProfileActionsType, profileReducer} from './profile-reducer';
import createSagaMiddleware from 'redux-saga'
import {getUserSaga} from './get-user-saga';
import {getUserReposSaga} from './get-user-repos-saga';
import {all} from 'redux-saga/effects'



const rootReducer = combineReducers({
    profile: profileReducer
})

//type of all actions
export type AppActionsType = ProfileActionsType

//if we want to use thunk inside thunk we need to use this type
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(rootWatcherSaga)

function* rootWatcherSaga() {
    yield all([getUserSaga(), getUserReposSaga()])
}


export type AppRootStateType = ReturnType<typeof rootReducer>

export default store;
