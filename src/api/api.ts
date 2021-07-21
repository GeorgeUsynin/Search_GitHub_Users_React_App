import axios from 'axios';
import {RepoType, UserType} from '../redux/profile-reducer';

export const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/',
})



export const usersAPI = {
    getUser(userName: string) {
        return axiosInstance
            .get<UserType>(`/users/${userName}`).then(response => response.data)
    },
    getRepos(userName: string | null | undefined, perPage: number, page: number) {
        return axiosInstance
            .get<Array<RepoType>>(`/users/${userName}/repos?per_page=${perPage}&page=${page}`).then(response => response.data)
    }
}