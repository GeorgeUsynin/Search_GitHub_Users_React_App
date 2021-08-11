import {call, put, takeEvery} from 'redux-saga/effects';
import {usersAPI} from '../api/api';
import {RepoType, setIsFetchingProfile, setIsNotFound, setRepos, setUser, UserType} from './profile-reducer';

export function* getUserWS(action: any) {
    yield put(setIsFetchingProfile(true))
    try {
        const userData: UserType = yield call(usersAPI.getUser, action.userName)
        const userRepos: Array<RepoType> = yield call(usersAPI.getRepos, action.userName, action.perPage, action.page)
        yield put(setUser(userData))
        yield put(setRepos(userRepos))
        yield put(setIsFetchingProfile(false))
    } catch (e) {
        yield put(setUser(null))
        yield put(setIsNotFound(true))
    }
}

export const getUser = (userName: string, perPage: number, page: number) => {
    return {
        type: 'GITHUB-SEARCH/GET-USER',
        userName,
        perPage,
        page
    }
}

export function* getUserSaga() {
    yield takeEvery('GITHUB-SEARCH/GET-USER', getUserWS)
}
