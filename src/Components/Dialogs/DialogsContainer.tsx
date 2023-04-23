import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
    store: any
}
const DialogsContainer = (props: DialogsContainerPropsType) => {
    let state = props.store.getState().messagePage

    const onAddMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onChangeArea = (newText: string) => {
        props.store.dispatch(updateNewMessageTextAC(newText))
    }

    return <Dialogs messagePage={state} onAddMessage={onAddMessage} onChangeArea={onChangeArea}/>
};

export default DialogsContainer;