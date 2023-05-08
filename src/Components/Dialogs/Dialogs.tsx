import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/messageReducer";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    isAuth: boolean
    addMessageAC: () => void
    updateNewMessageTextAC: (newText: string) => void
}
const Dialogs = (props: DialogsPropsType) => {
    console.log('render Dialogs')

    // if (!props.isAuth) {
    //     return <Redirect to={'/login'}/>
    // }

    let dialogsElements = props.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m, i) => <Message key={i} message={m.message} id={m.id}/>)

    let onChangeArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageTextAC(e.currentTarget.value)
    }
    let onAddMessage = () => {
        props.addMessageAC()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea cols={15} rows={2} placeholder='enter your message' onChange={onChangeArea}
                                   value={props.newMessageText}/></div>
                    <button onClick={onAddMessage}>send message</button>
                </div>
            </div>

        </div>

    );
};

export default Dialogs;