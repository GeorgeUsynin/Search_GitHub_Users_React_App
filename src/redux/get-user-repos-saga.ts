import {call, put, takeEvery} from 'redux-saga/effects';
import {usersAPI} from '../api/api';
import {RepoType, setCurrentPage, setIsFetchingRepos, setRepos} from './profile-reducer';

export function* getUserReposWS(action: ReturnType<typeof getUserRepos>) {
    yield put(setIsFetchingRepos(true))
    const userRepos: Array<RepoType> = yield call(usersAPI.getRepos, action.userName, action.perPage, action.page)
    yield put(setIsFetchingRepos(false))
    yield put(setCurrentPage(action.page))
    yield put(setRepos(userRepos))
}

export const getUserRepos = (userName: string, perPage: number, page: number) => {
    return {
        type: 'GITHUB-SEARCH/GET-REPOS',
        userName,
        perPage,
        page
    }
}

export function* getUserReposSaga(){
    yield takeEvery('GITHUB-SEARCH/GET-REPOS', getUserReposWS)
}
