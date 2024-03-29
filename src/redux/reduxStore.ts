import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, {ProfileActionType} from "./profileReducer";
import messageReducer, {MessageActionType} from "./messageReducer";
import usersReducer, {UsersAT} from "./usersReducer";
import authReducer, {AuthAT} from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import appReducer, {SetInitializedAT} from "./appReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware)) //applyMiddleware-функционал для redux конвеера(патерн)

export type RootStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store

// @ts-ignore
window.store = store;

export type ActionType = ProfileActionType | MessageActionType | UsersAT | AuthAT | SetInitializedAT




// export type StateType  = ReturnType<typeof store.getState>