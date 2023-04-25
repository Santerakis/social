import {MessagePageType} from "./store";
import {ActionType} from "./reduxStore";

let initialState = {
    dialogs: [{id: 1, name: 'Sergey'}, {id: 2, name: 'Dima'}, {id: 3, name: 'Natasha'}],
    messages: [{id: 1, message: 'Hi...'}, {id: 1, message: 'How are you?'}, {id: 1, message: 'Hey hey!'}],
    newMessageText: 'insert new message'
}

const messageReducer = (state: MessagePageType = initialState, action: ActionType) => {

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