import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, setStatusTC, setUserProfile, updateStatusTC} from "../../redux/profileReducer";
import {RootStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PhotosType = {
    small: string
    large: string
}
type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfileResponseType = {
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: PhotosType
}

type PathParamsType = {
    userId: string
}
export type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
type MapStateToPropsType = {
    userProfile: ProfileResponseType | null
    status: string
    userId: number
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (userProfile: ProfileResponseType) => void
    getProfileTC: (userId: number) => void
    setStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
}
export type ProfileUsersPropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileUsersPropsType

class ProfileContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getProfileTC(userId)
        setTimeout(() => {
            this.props.setStatusTC(userId)
        }, 1000)
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        console.log('RERENDER Profile')
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    console.log('mSTP from connect of ProfileContainer')
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        userId: state.auth.id!,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileTC, setStatusTC, updateStatusTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export default withAuthRedirect(connect(mapStateToProps, {setUserProfile, getProfileTC})(WithUrlDataContainerComponent));


