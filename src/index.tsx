import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";
import StoreContext from "./StoreContext";
import {Provider} from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
            {/*<StoreContext.Provider value={store}>*/}
            {/*    <App/>*/}
            {/*</StoreContext.Provider>*/}
        </BrowserRouter>);
}

rerenderEntireTree()

store.subscribe(() => {rerenderEntireTree()})



