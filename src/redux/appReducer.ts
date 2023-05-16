import {ActionType, RootStateType} from "./reduxStore";
import {Dispatch} from "redux";
import {authAPI} from "../ api/api";
import {authMeTC} from "./authReducer";
import {ThunkDispatch} from "redux-thunk";

export type InitialStateType = {
    isInitializing: boolean
}

let initialState = {
    isInitializing: false
}

const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZATION':
            return {
                ...state,
                isInitializing: true
            }
        default:
            return state
    }
}

export const setInitializationAC = () => ({type: 'SET-INITIALIZATION'} as const)

export type SetInitializedAT = ReturnType<typeof setInitializationAC>

export const initializeAppTC = () => (dispatch: ThunkDispatch<RootStateType, {}, ActionType>) => {
    let promise = dispatch(authMeTC())  // то что надо получить для инициал. приложения
    // dispatch(someThunkTC)
    // dispatch(someThunkTC)

    //параллельно запускаем запрос и ждем, когда все промисы в массиве зарезолсятся
    Promise.all([promise]).then(() => {
        dispatch(setInitializationAC())
    })
}


export default appReducer