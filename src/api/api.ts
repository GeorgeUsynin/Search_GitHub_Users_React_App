import axios, {AxiosResponse} from 'axios';
import {RepoType, UserType} from '../redux/profile-reducer';

export const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/',
})

export const usersAPI = {
    getUser(userName: string): Promise<UserType> {
        return axiosInstance
            .get(`/users/${userName}`).then(response => {
                return response.data
            })
    },
    getRepos(userName: string, perPage: number, page: number): Promise<Array<RepoType>> {
        return axiosInstance
            .get<Array<RepoType>>(`/users/${userName}/repos?per_page=${perPage}&page=${page}`).then(response => {
                return response.data
            })
    }
}
