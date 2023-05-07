import {ActionType} from "./reduxStore";
import {DataType} from "../Components/Header/HeaderContainer";
import {Dispatch} from "redux";
import {authAPI} from "../ api/api";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataType) => ({type: 'SET-USER-DATA', data} as const)

export type AuthAT =
    ReturnType<typeof setAuthUserData>

export const authMeTC = () => (dispatch: Dispatch) => {
    authAPI.authMe().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(res.data.data))
        }
    })
}

export default authReducer