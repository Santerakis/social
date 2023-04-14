import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogDataType, MessageDataType} from "../../index";

type DialogsPropsType = {
    dialogs: DialogDataType[]
    messages: MessageDataType[]
}
const Dialogs = (props: DialogsPropsType) => {
    // type DialogDataType = {
    //     id: number
    //     name: string
    // }
    // type MessagesDataType = {
    //     id: number
    //     message: string
    // }
    // let dialogs: DialogDataType[] = [
    //     {id: 1, name: 'Sergey'}, {id: 2, name: 'Dima'}, {id: 3, name: 'Natasha'}
    // ]
    // let messages: MessagesDataType[] = [
    //     {id: 1, message: 'Hi...'}, {id: 1, message: 'How are you?'}, {id: 1, message: 'Hey hey!'}
    // ]

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>

    );
};

export default Dialogs;