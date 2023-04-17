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
    likesCount: string
}
export type ProfilePageType = {
    posts: PostType[]
}
export type MessagePageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}
export let state: StateType = {
    profilePage: {
        posts: [{id: 1, message: 'Hi, how are you?', likesCount: '25'}, {id: 2, message: 'It\'s my first post', likesCount: '105'}, {id: 3, message: 'Hello', likesCount: '8'}]
    },
    messagePage: {
        dialogs: [{id: 1, name: 'Sergey'}, {id: 2, name: 'Dima'}, {id: 3, name: 'Natasha'}],
        messages: [{id: 1, message: 'Hi...'}, {id: 1, message: 'How are you?'}, {id: 1, message: 'Hey hey!'}],
    }
}
