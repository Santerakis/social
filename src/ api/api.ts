import {ResponseType} from "../Components/Users/UsersContainer";
import {FollowResponseType} from "../Components/Users/Users";
import {AuthMeResponseType} from "../Components/Header/HeaderContainer";
import {ProfileResponseType} from "../Components/Profile/ProfileContainer";
import axios, {AxiosResponse, CreateAxiosDefaults} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '139e7d65-510f-462c-914c-d7a34626182d'
    }
} as CreateAxiosDefaults)

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<ResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}

export const followUnfollowAPI = {
    follow: (userId: number) => instance.post<FollowResponseType>(`follow/${userId}`),
    unFollow: (userId: number) => instance.delete<FollowResponseType>(`follow/${userId}`)
}

export const authAPI = {
    authMe: () => {
        return instance.get<AuthMeResponseType>(`auth/me`)
    },
    login: (email, password, rememberMe) => {
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    loginOut: () => {
        return instance.delete<AuthMeResponseType>(`auth/login`)
    },
}
export const profileAPI = {
    get(userId: string) {
        return instance.get<ProfileResponseType>(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<{ status: string }, AxiosResponse<UpdateStatusResultType>>('profile/status', {status})
    }
}

type UpdateStatusResultType =
    {
        resultCode: number
        messages: string[]
        data: {}
    }