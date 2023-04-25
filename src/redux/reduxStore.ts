import {combineReducers, createStore } from "redux";
import profileReducer, {ProfileActionType} from "./profileReducer";
import messageReducer, {MessageActionType} from "./messageReducer";
import usersReducer, {UsersAT} from "./usersReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer
})

export let store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

export type StateType  = ReturnType<typeof store.getState>

export type StoreType = typeof store

// @ts-ignore
window.store = store;

export type ActionType = ProfileActionType | MessageActionType | UsersAT