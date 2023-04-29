import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 const onAddMessage = () => {
//                     store.dispatch(addMessageAC())
//                 }
//                 const onChangeArea = (newText: string) => {
//                     store.dispatch(addMessageAC())
//                 }
//
//                 return <Dialogs messagePage={store.getState().messagePage} onAddMessage={onAddMessage} onChangeArea={onChangeArea}/>
//             }
//         }
//     </StoreContext.Consumer>
// };
// export default DialogsContainer;

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageText: state.messagePage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageAC())
        },
        onChangeArea: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer



