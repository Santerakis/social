import profileReducer, {ProfileActionType} from "./profileReducer";
import messageReducer, {MessageActionType} from "./messageReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._callSubscriber()
    }
}

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

export type ActionType = ProfileActionType | MessageActionType








