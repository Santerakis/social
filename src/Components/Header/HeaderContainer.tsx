import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {loginOutTC, setAuthUserData} from "../../redux/authReducer";
import {RootStateType} from "../../redux/reduxStore";

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}
export type AuthMeResponseType = {
    resultCode: number
    messages: string[]
    data: DataType
}
// type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (data: DataType) => void
    // authMeTC: () => void
    loginOutTC: () => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, RootStateType> {


    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthUserData, loginOutTC})(HeaderContainer);