import {ProfilePageType} from "./store";
import {ActionType} from "./reduxStore";


let initialState = {
        posts: [{id: 1, message: 'Hi, how are you?', likesCount: 25}, {id: 2, message: 'It\'s my first post', likesCount: 105}, {id: 3, message: 'Hello', likesCount: 8}],
        newPostText: 'insert new post'
    }

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
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
        default:
            return state
    }
}
export const addPostAC = (): AddPostActionType => ({type: 'ADD-POST'} as const) //Либо as const, либо возвращаймый тип, но когда исп ReturnType<> возн. зациклнинность типов, тогда только const
export const updateNewPostTextAC = (newPostText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText} as const)

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ProfileActionType =
    AddPostActionType
    | ReturnType<typeof updateNewPostTextAC>

export default profileReducer