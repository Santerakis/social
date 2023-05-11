import React, {ComponentType} from 'react'
import {Redirect} from "react-router-dom";
import {RootStateType} from "../redux/reduxStore";
import {mapStateToPropsForRedirectType} from "../Components/Profile/ProfileContainer";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state: RootStateType): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>){

    class RedirectComponent extends React.Component<mapStateToPropsForRedirectType, RootStateType> {
        render() {
            let {isAuth, ...restProps} = this.props

            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>
        }
    }
    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectAuthRedirectComponent
}
