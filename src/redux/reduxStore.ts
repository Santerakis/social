import {combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
})

export let store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>
// export type StoreType = typeof store

// @ts-ignore
window.store = store;
