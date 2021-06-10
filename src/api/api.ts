import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/',
})

export const usersAPI = {
    getUser(userName: string) {
        return axiosInstance
            .get(`/users/${userName}`).then(response => {
                return response.data
            })
    },
    getRepos(userName: string, perPage: number, page: number) {
        return axiosInstance
            .get(`/users/${userName}/repos?per_page=${perPage}&page=${page}`).then(response => {
                return response.data
            })
    }
}