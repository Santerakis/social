import React from 'react';
import {addMessageAC, DialogType, MessageType, updateNewMessageTextAC} from "../../redux/messageReducer";
import Dialogs, {DialogsPropsType} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/reduxStore";
import {Dispatch, compose} from "redux";
import {Redirect} from "react-router-dom";
import {PropsType} from "../Profile/ProfileContainer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    // isAuth: boolean
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
        // isAuth: state.auth.isAuth
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

export default compose(
    connect(mapStateToProps, {addMessageAC,  updateNewMessageTextAC}),
    withAuthRedirect
)(Dialogs)

// const AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, {addMessageAC,  updateNewMessageTextAC})(AuthRedirectComponent)

