import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, setUserProfile} from "../../redux/profileReducer";
import {RootStateType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PhotosType = {
    small: string
    large: string }
type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null }
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
type MapStateToPropsType = {
    userProfile: ProfileResponseType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (userProfile: ProfileResponseType) => void
    getProfileTC: (userId: string) => void
}
export type ProfileUsersPropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileUsersPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '27514'
        }
        this.props.getProfileTC(userId)
        // profileAPI.get(userId)
        //     .then(res => {
        //         this.props.setUserProfile(res.data)
        //     })
    }
    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
};


const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    userProfile: state.profilePage.userProfile!,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getProfileTC})(WithUrlDataContainerComponent);



