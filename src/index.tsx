import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType, store} from "./redux/reduxStore";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderEntireTree = (state: RootStateType) => {
    root.render(
        <BrowserRouter>
            <App  store={store} state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>);
}

rerenderEntireTree(store.getState())

store.subscribe(() => {rerenderEntireTree(store.getState())})



