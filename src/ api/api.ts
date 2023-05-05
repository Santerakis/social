import axios from "axios";
import {ResponseType} from "../Components/Users/UsersContainer";
import {FollowResponseType} from "../Components/Users/Users";
import {AuthMeResponseType} from "../Components/Header/HeaderContainer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': '41a57b15-e11f-44c8-97d0-06e777d3aac1'
    }
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<ResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}

export const followUnfollowAPI = {
    follow: (userId: number) => {
        return instance.post<FollowResponseType>(`follow/${userId}`, {})
    },
    unFollow: (userId: number) => {
        return instance.delete<FollowResponseType>(`follow/${userId}`)
    }
}
export const authAPI = {
    authMe: () => {
        return instance.get<AuthMeResponseType>(`auth/me`)
    },
}
