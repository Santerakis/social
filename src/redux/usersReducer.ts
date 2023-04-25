import {ActionType} from "./reduxStore";

export type LocationType = {city: string, country: string}
export type UserType = {id: number, followed: boolean, fullname: string, status: string, location: LocationType}
export type UsersPageType = {
    users: UserType[]
}
let initialState = {
    users:
        [{id: 1, followed: true, fullname: 'Sergey', status: 'I am a boss', location: {city: 'Daugavpils', country: 'Latvia'}},
        {id: 1, followed: true, fullname: 'Dima', status: 'I am a gym', location: {city: 'Gumgurg', country: 'Niderland'}},
        {id: 1, followed: false, fullname: 'Kate', status: 'I am a girl', location: {city: 'LA', country: 'USA'}},
        {id: 1, followed: true, fullname: 'Alla', status: 'I am a boss', location: {city: 'London', country: 'UK'}}],
}

const userReducer = (state: UsersPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ?{...u, followed: true} :u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ?{...u, followed: false} :u)}
        case 'SET-USERS':
            return {...state, users: [...state.users, action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)

export type UsersAT =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export default userReducer