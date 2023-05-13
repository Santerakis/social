import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileUsersPropsType} from "./ProfileContainer";

const Profile = (props: ProfileUsersPropsType) => {
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} status={props.status} updateStatus={props.updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;