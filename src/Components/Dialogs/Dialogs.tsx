import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    type DialogDataType = {
        id: number
        name: string
    }
    let dialogsData: DialogDataType[] = [
        {id: 1, name:'Sergry'}, {id: 2, name:'Dima'}, {id: 3, name:'Natasha'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Sergey'} id={1}/>
                <DialogItem name={'Dima'} id={2}/>
                <DialogItem name={'Natasha'} id={3}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi...'}/>
                <Message message={'How are you?'}/>
                <Message message={'Hey hey!'}/>
            </div>

        </div>

    );
};

export default Dialogs;