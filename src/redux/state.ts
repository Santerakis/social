let store: StoreType = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you?', likesCount: 25}, {
                id: 2,
                message: 'It\'s my first post',
                likesCount: 105
            }, {id: 3, message: 'Hello', likesCount: 8}],
            newPostText: 'insert new post'
        },
        messagePage: {
            dialogs: [{id: 1, name: 'Sergey'}, {id: 2, name: 'Dima'}, {id: 3, name: 'Natasha'}],
            messages: [{id: 1, message: 'Hi...'}, {id: 1, message: 'How are you?'}, {id: 1, message: 'Hey hey!'}],
            newMessageText: 'insert new message'
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    _addPost() {
        let newPost = {
            id: 88,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    _updateNewMessageText(newText: string) {
        this._state.messagePage.newMessageText = newText
        this._callSubscriber()
    },
    _addMessage() {
        let newMessage = {
            id: 1,
            message: this._state.messagePage.newMessageText
        }
        this._state.messagePage.messages.unshift(newMessage)
        this._state.messagePage.newMessageText = ''
        this._callSubscriber()
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._updateNewMessageText(action.newText)
        } else if (action.type === 'ADD-MESSAGE') {
            this._addMessage()
        }
    }
}

export const addPostAC = (): AddPostActionType => ({type: 'ADD-POST'} as const) //Либо as const, либо возвращаймый тип, но когда исп ReturnType<> возн. зациклнинность типов, тогда только const

export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)
export const updateNewMessageTextAC = (newText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText} as const)
export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const)


// @ts-ignore
window.store = store

export default store


export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type MessagePageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    _updateNewMessageText: (newText: string) => void
    _addMessage: () => void
    dispatch: (action: ActionType) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ActionType =
    AddPostActionType
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof addMessageAC>








