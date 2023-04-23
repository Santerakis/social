import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";
import StoreContext from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderEntireTree = (store: any) => {
    root.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>);
}

rerenderEntireTree(store)

store.subscribe(() => {rerenderEntireTree(store)})



