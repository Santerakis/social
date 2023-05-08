import React from 'react';
import {addMessageAC, DialogType, MessageType, updateNewMessageTextAC} from "../../redux/messageReducer";
import Dialogs, {DialogsPropsType} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {PropsType} from "../Profile/ProfileContainer";

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

type mapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    isAuth: boolean
}
type mapDispatchToProps = {
    addMessageAC: () => void
    updateNewMessageTextAC: (newText: string) => void
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageText: state.messagePage.newMessageText,
        isAuth: state.auth.isAuth
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

const AuthRedirectComponent = (props: DialogsPropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps, {addMessageAC,  updateNewMessageTextAC})(AuthRedirectComponent)

export default DialogsContainer



