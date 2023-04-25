import {ProfilePageType} from "./store";
import {ActionType} from "./reduxStore";

let initialState = {
        posts: [{id: 1, message: 'Hi, how are you?', likesCount: 25}, {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 105
        }, {id: 3, message: 'Hello', likesCount: 8}],
        newPostText: 'insert new post'
    }

const profileReducer = (pState: ProfilePageType = initialState, action: ActionType) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 88,
                message: pState.newPostText,
                likesCount: 0
            }
            pState.posts.unshift(newPost)
            pState.newPostText = ''
            return pState

        case 'UPDATE-NEW-POST-TEXT':
            pState.newPostText = action.newPostText
            return pState

        default:
            return pState
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