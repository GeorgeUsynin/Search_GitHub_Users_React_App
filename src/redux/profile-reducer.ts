import {usersAPI} from '../api/api';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, AppRootStateType} from './redux-store';

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

export const getUser = createAsyncThunk<UserType, string, { dispatch: AppDispatch, state: AppRootStateType }>('profile/setUser', async (userName, thunkAPI) => {
    try {
        return await usersAPI.getUser(userName)
    } catch (e) {
        return thunkAPI.rejectWithValue('User not found')
    }
})


export const getUserRepos = createAsyncThunk<Array<RepoType>, {}, { dispatch: AppDispatch, state: AppRootStateType }>('profile/setUserRepos', async ({}, thunkAPI) => {
    const userName = thunkAPI.getState().profile.user?.login
    const perPage = thunkAPI.getState().profile.perPage
    const page = thunkAPI.getState().profile.currentPage
    try {
        return await usersAPI.getRepos(userName, perPage, page)
    } catch (e) {
        return thunkAPI.rejectWithValue('Repositories not found')
    }
})

const slice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
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
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.isFetchingProfile = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.user = null
            state.isNotFound = true
            state.isFetchingProfile = false
        })
        builder.addCase(getUserRepos.pending, (state, action) => {
            state.isFetchingRepos = true
        })
        builder.addCase(getUserRepos.fulfilled, (state, action) => {
            state.repos = action.payload
            state.isFetchingRepos = false
            state.isFetchingProfile = false
        })
    }
})

export const {
    setCurrentPage,
    setIsFetchingPhoto,
    setIsFetchingProfile,
    setIsNotFound
} = slice.actions

export const profileReducer = slice.reducer
