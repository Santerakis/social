import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


class ProfileContainer extends React.Component<any> {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        );
    }


};
export default ProfileContainer;
