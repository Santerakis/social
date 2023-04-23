import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagePageType} from "../../redux/store";

type DialogsPropsType = {
    messagePage: MessagePageType
    onAddMessage: () => void
    onChangeArea: (newText: string) => void
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.messagePage.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>)
    let messagesElements = props.messagePage.messages.map((m, i) => <Message key={i} message={m.message} id={m.id}/>)

    let onChangeArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeArea(e.currentTarget.value)
    }
    let onAddMessage = () => {
        props.onAddMessage()
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
                                   value={props.messagePage.newMessageText}/></div>
                    <button onClick={onAddMessage}>send message</button>
                </div>
            </div>

        </div>

    );
};

export default Dialogs;