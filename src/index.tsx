import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>);
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)



