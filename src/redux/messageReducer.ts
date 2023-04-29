// import {DialogType, MessagePageType, MessageType} from "./store";
import {ActionType} from "./reduxStore";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
// type MessagePageType = {
//     dialogs: DialogType[]
//     messages: MessageType[]
//     newMessageText: string
// }
type MessagePageType = typeof initialState

let initialState = {
    dialogs: [{id: 1, name: 'Sergey'}, {id: 2, name: 'Dima'}, {id: 3, name: 'Natasha'}] as Array<DialogType>,  //воспринемай этот массив как ...такой
    messages: [{id: 1, message: 'Hi...'}, {id: 1, message: 'How are you?'}, {id: 1, message: 'Hey hey!'}] as Array<MessageType>,
    newMessageText: 'insert new message'
}

const messageReducer = (state: MessagePageType = initialState, action: ActionType): MessagePageType => {
    console.log('render messageReducer')
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            let newState = {...state, newMessageText: action.newMessageText}
            // state.newMessageText = action.newMessageText
            return newState
        }
        case 'ADD-MESSAGE': {
            let newMessage = {
                id: 1,
                message: state.newMessageText
            }
            let newState = {...state, messages: [newMessage, ...state.messages], newMessageText: ''}
            // state.messages.unshift(newMessage)
            // state.newMessageText = ''
            return newState
        }
        default:
            return state
    }
}
export const updateNewMessageTextAC = (newMessageText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText} as const)
export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const)

export type MessageActionType =
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof addMessageAC>

export default messageReducer