import {ActionType} from "./reduxStore";

export type LocationType = {city: string, country: string}
export type UserType = {name: string, id: number, uniqueUrlName: null, photos: {small: null, large: null}, status: null, followed: boolean}
export type UsersPageType = {
    users: UserType[]
}
let initialState = {
    users: []
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
            return {...state, users: state.users.map(u => u.id === action.userId ?{...u, followed: true} :u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ?{...u, followed: false} :u)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users] as UserType[]}
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