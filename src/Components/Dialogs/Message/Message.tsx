import React from 'react';
import s from "../Dialogs.module.css";

type MessagePropsType = {
    message: string
    id: number
}
const Message = (props: MessagePropsType) => {
    return (
        <div key={props.id} className={s.message}>{props.message}</div>
    )
}

export default Message;