import {ActionType} from "./reduxStore";
import {Dispatch} from "redux";
import {followUnfollowAPI, usersAPI} from "../ api/api";
import dialogs from "../Components/Dialogs/Dialogs";

// export type LocationType = {city: string, country: string}
export type UserType = { name: string, id: number, uniqueUrlName: null, photos: { small: null, large: null }, status: null, followed: boolean }
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: number[]
}
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 15,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [2]
}
// let initialState = {
//     users:
//         [{id: 1, photoUrl: 'https://i0.wp.com/thecitylife.org/wp-content/uploads/2021/02/011_BOSS_ChrisHemsworth_SR21.jpg?resize=1025%2C1536&ssl=1', followed: false, fullname: 'Sergey', status: 'I am a boss', location: {city: 'Daugavpils', country: 'Latvia'}},
//         {id: 2, photoUrl: 'https://st.depositphotos.com/1008939/1880/i/450/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg', followed: true, fullname: 'Dima', status: 'I am a gym', location: {city: 'Gumgurg', country: 'Niderland'}},
//         {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJrhXELkKOQHxV3Hrb549pijhwfXDjVpfnWZVw2zmB2hhhleKR8VO-_5SXMLnJwTSDdU&usqp=CAU', followed: false, fullname: 'Kate', status: 'I am a girl', location: {city: 'LA', country: 'USA'}},
//         {id: 4, photoUrl: 'https://st.depositphotos.com/1017986/1941/i/450/depositphotos_19419591-stock-photo-face-and-hands-of-beautiful.jpg', followed: true, fullname: 'Alla', status: 'I am a boss', location: {city: 'London', country: 'UK'}}],
// }

const userReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    console.log('render userReducer')
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: [...action.users] as UserType[]}
        case 'SET-CURRENT-PAGE' :
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USER-COUNT' :
            return {...state, totalUsersCount: action.count}
        case 'IS-LOADING' :
            return {...state, isLoading: action.isLoading}
        case 'FOLLOW-IN_PROGRESS' :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (count: number) => ({type: 'SET-TOTAL-USER-COUNT', count} as const)
export const loading = (isLoading: boolean) => ({type: 'IS-LOADING', isLoading} as const)
export const followInProgress = (isFetching: boolean, userId: number) => ({type: 'FOLLOW-IN_PROGRESS', userId, isFetching} as const)

export type UsersAT =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof loading>
    | ReturnType<typeof followInProgress>

export const getUserTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(loading(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize)
        .then(res => {
            dispatch(setUsers(res.items))
            dispatch(setTotalUsersCount(res.totalCount))
            dispatch(loading(false))
        })
}

export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(followInProgress(true, userId))
    followUnfollowAPI.unFollow(userId).then(res => {
        dispatch(followInProgress(false, userId))
        if (res.data.resultCode === 0) {
            dispatch(unfollow(userId))
        }
    })
}
export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(followInProgress(true, userId))
    followUnfollowAPI.follow(userId).then(res => {
        dispatch(followInProgress(false, userId))
        if (res.data.resultCode === 0) {
            dispatch(follow(userId))
        }
    })
}

export default userReducer