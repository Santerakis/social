import {combineReducers, createStore } from "redux";
import profileReducer, {ProfileActionType} from "./profileReducer";
import messageReducer, {MessageActionType} from "./messageReducer";
import usersReducer, {UsersAT} from "./usersReducer";
import authReducer, {AuthAT} from "./authReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store

// @ts-ignore
window.store = store;

export type ActionType = ProfileActionType | MessageActionType | UsersAT | AuthAT




// export type StateType  = ReturnType<typeof store.getState>