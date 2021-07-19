import {InitialStateType, profileReducer, setCurrentPage, setUser, UserType} from "./profile-reducer";

test("page should be changed", () => {

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

    const stateWithChangedPage = profileReducer(initialState, setCurrentPage(10))

    expect(stateWithChangedPage.currentPage).toBe(10)
})

test("user should be set", () => {
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

    const user: UserType = {
        avatar_url: "xxx",
        bio: "Yo",
        public_repos: 100,
        login: "George Usynin",
        followers: 100000,
        html_url: "zzz",
        following: 200
    }

    const stateWithSetUser = profileReducer(initialState, setUser(user))

    expect(stateWithSetUser.user).toBeTruthy()
    expect(stateWithSetUser.user?.login).toBe("George Usynin")
    expect(stateWithSetUser.user?.bio).toBe("Yo")
    expect(stateWithSetUser.user?.following).toBe(200)
})