import {ActionType} from "./reduxStore";
import {ProfileResponseType} from "../Components/Profile/ProfileContainer";


// {
//     aboutMe: string
//     contacts: {
//         facebook: string
//         website: null
//         vk: string
//         twitter: string
//         instagram: string
//         youtube: null,
//             github: string
//         mainLink: null
//     }
//     lookingForAJob: true,
//         lookingForAJobDescription: string
//     fullName: string
//     userId: number,
//         photos: PhotosType
// }

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    userProfile: ProfileResponseType | null
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
let initialState = {
        posts: [{id: 1, message: 'Hi, how are you?', likesCount: 25}, {id: 2, message: 'It\'s my first post', likesCount: 105}, {id: 3, message: 'Hello', likesCount: 8}],
        newPostText: 'insert new post',
        userProfile: null
    }

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    console.log('render profileReducer')
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newPostText}
            // state.newPostText = action.newPostText
            // return state
        case 'ADD-POST': {
            let newPost = {
                id: 88,
                message: state.newPostText,
                likesCount: 0
            }
            let newState = {...state, posts: [newPost, ...state.posts], newPostText: ''}
            // state.posts.unshift(newPost)
            // state.newPostText = ''
            return newState
        }
        case 'SET-USER-PROFILE':
            return {...state, userProfile: action.userProfile as ProfileResponseType}
        default:
            return state
    }
}
export const addPostAC = (): AddPostActionType => ({type: 'ADD-POST'} as const) //Либо as const, либо возвращаймый тип, но когда исп ReturnType<> возн. зациклнинность типов, тогда только const
export const updateNewPostTextAC = (newPostText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText} as const)
export const setUserProfile = (userProfile: ProfileResponseType) => ({type: 'SET-USER-PROFILE', userProfile} as const)

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ProfileActionType =
    AddPostActionType
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>

export default profileReducer