import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div key={props.id} className={s.item}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;