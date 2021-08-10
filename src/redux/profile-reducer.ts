//action types

const SET_USER = 'SET_USER'
const SET_REPOS = 'SET_REPOS'
const SET_IS_FETCHING_PROFILE = 'SET_IS_FETCHING_PROFILE'
const SET_IS_FETCHING_REPOS = 'SET_IS_FETCHING_REPOS'
const SET_IS_FETCHING_PHOTO = 'SET_IS_FETCHING_PHOTO'
const SET_IS_NOT_FOUND = 'SET_IS_NOT_FOUND'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

//types

export type ProfileActionsType =
    ReturnType<typeof setUser>
    | ReturnType<typeof setRepos>
    | ReturnType<typeof setIsFetchingProfile>
    | ReturnType<typeof setIsFetchingRepos>
    | ReturnType<typeof setIsNotFound>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setIsFetchingPhoto>


export type ProfileStateType = {
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

const initialState: ProfileStateType = {
    user: null,
    repos: null,
    isFetchingProfile: false,
    isFetchingRepos: false,
    isFetchingPhoto: false,
    isNotFound: false,
    perPage: 4,
    currentPage: 1
}

//actions

export const setUser = (user: UserType | null) => {
    return {
        type: SET_USER,
        payload: {
            user
        }
    } as const
}

export const setRepos = (repos: Array<RepoType> | null) => {
    return {
        type: SET_REPOS,
        payload: {
            repos
        }
    } as const
}

export const setIsFetchingProfile = (isFetchingProfile: boolean) => {
    return {
        type: SET_IS_FETCHING_PROFILE,
        payload: {
            isFetchingProfile
        }
    } as const
}

export const setIsFetchingRepos = (isFetchingRepos: boolean) => {
    return {
        type: SET_IS_FETCHING_REPOS,
        payload: {
            isFetchingRepos
        }
    } as const
}
export const setIsFetchingPhoto = (isFetchingPhoto: boolean) => {
    return {
        type: SET_IS_FETCHING_PHOTO,
        payload: {
            isFetchingPhoto
        }
    } as const
}

export const setIsNotFound = (isNotFound: boolean) => {
    return {
        type: SET_IS_NOT_FOUND,
        payload: {
            isNotFound
        }
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}

//reducer

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case SET_USER:
        case SET_REPOS:
        case SET_IS_FETCHING_PROFILE:
        case SET_IS_NOT_FOUND:
        case SET_CURRENT_PAGE:
        case SET_IS_FETCHING_REPOS:
        case SET_IS_FETCHING_PHOTO:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

//sagas

