import {usersAPI} from "../api/api";
import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";

export type InitialStateType = {
    repos: Array<RepoType> | null
    user: UserType | null
    isFetchingProfile: boolean
    isFetchingPhoto: boolean
    isFetchingRepos: boolean
    isNotFound: boolean
    perPage: number
    currentPage: number
}

export type UserType = {
    avatar_url: string | null
    html_url: string | null
    login: string | null
    bio: string | null
    followers: number | null
    following: number | null
    public_repos: number | null
}

export type RepoType = {
    name: string | null
    description: string | null
    html_url: string | null
    id: number | null
}

const initialState: InitialStateType = {
    user: null,
    repos: null,
    isFetchingProfile: false,
    isFetchingRepos: false,
    isFetchingPhoto: false,
    isNotFound: false,
    perPage: 4,
    currentPage: 1
}

const slice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserType | null>) {
            state.user = action.payload
        },
        setRepos(state, action: PayloadAction<Array<RepoType> | null>) {
            state.repos = action.payload
        },
        setIsFetchingProfile(state, action: PayloadAction<boolean>) {
            state.isFetchingProfile = action.payload
        },
        setIsFetchingRepos(state, action: PayloadAction<boolean>) {
            state.isFetchingRepos = action.payload
        },
        setIsFetchingPhoto(state, action: PayloadAction<boolean>) {
            state.isFetchingPhoto = action.payload
        },
        setIsNotFound(state, action: PayloadAction<boolean>) {
            state.isNotFound = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }
    }
})

export const {
    setUser,
    setCurrentPage,
    setIsFetchingPhoto,
    setIsFetchingRepos,
    setIsFetchingProfile,
    setRepos,
    setIsNotFound
} = slice.actions


export const profileReducer = slice.reducer

//thunks

export const getUser = (userName: string, perPage: number, page: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetchingProfile(true))

    let promises = [usersAPI.getUser(userName), usersAPI.getRepos(userName, perPage, page)]

    Promise.all(promises)
        .then(([userData, userRepos]) => {
            dispatch(setUser(userData))
            dispatch(setRepos(userRepos))
            dispatch(setIsFetchingProfile(false))
        })
        .catch(error => {
            dispatch(setUser(null))
            dispatch(setIsNotFound(true))
        })
}

export const getUserRepos = (userName: string, perPage: number, page: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetchingRepos(true))
    usersAPI.getRepos(userName, perPage, page)
        .then(userRepos => {
            dispatch(setIsFetchingRepos(false))
            dispatch(setCurrentPage(page))
            dispatch(setRepos(userRepos))
        })
}