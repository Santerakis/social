import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                const onAddMessage = () => {
                    store.dispatch(addMessageAC())
                }
                const onChangeArea = (newText: string) => {
                    store.dispatch(updateNewMessageTextAC(newText))
                }

                return <Dialogs messagePage={store.getState().messagePage} onAddMessage={onAddMessage} onChangeArea={onChangeArea}/>
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;