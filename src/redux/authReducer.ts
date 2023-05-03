import {ActionType} from "./reduxStore";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
}

let initialState = {
    id: null,
    email: null,
    login: null
}

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}

export const setUserData = (data: InitialStateType) => ({type: 'SET-USER-DATA', data} as const)

export type AuthAT =
   ReturnType<typeof setUserData>

export default authReducer