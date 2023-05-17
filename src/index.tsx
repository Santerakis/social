import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";
import {Provider} from "react-redux";
import {setInitializationAC} from "./redux/appReducer";

setInterval(() => {
    store.dispatch({type: 'FAKE'})
}, 1000)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>);






// store.subscribe(() => {rerenderEntireTree()})  //connect внутри сам субскрайбится



