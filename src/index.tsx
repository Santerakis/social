import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export type DialogDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
let dialogs: DialogDataType[] = [
    {id: 1, name: 'Sergey'}, {id: 2, name: 'Dima'}, {id: 3, name: 'Natasha'}
]
let messages: MessageDataType[] = [
    {id: 1, message: 'Hi...'}, {id: 1, message: 'How are you?'}, {id: 1, message: 'Hey hey!'}
]

export type PostType = {
    id: number
    message: string
    likesCount: string
}
let posts: PostType[] = [
    {id: 1, message: 'Hi, how are you?', likesCount: '25'},
    {id: 2, message: 'It\'s my first post', likesCount:'105'},
    {id: 3, message: 'Hello', likesCount:'8'},
]


export type DataType = {
    dialogs: DialogDataType[]
    messages: MessageDataType[]
    posts: PostType[]
}
let data = {
    dialogs,
    messages,
    posts,
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App data={data}/>
        </React.StrictMode>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

