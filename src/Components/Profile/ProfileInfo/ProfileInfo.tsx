import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileResponseType} from "../ProfileContainer";
import Loader from "../../../common/preloader/Loader";
import userPhoto from "../../../assets/images/social_user.png";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoType = {
    userProfile: ProfileResponseType | null
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.userProfile) {
        return <Loader/>
    }
    return (
        <div>
            <div><img className={s.palImg}
                      src='https://oboinastol.net/katalog_kartinok/tom16/032/skachat_oboi_1920x1080.jpg'/></div>
            <div className={s.discriptionBlock}>
                <img src={props.userProfile.photos.large || userPhoto} className={s.userPhoto}
                     alt="user photo"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>


                {/*<img src={props.userProfile.photos.large}/>*/}
            </div>
        </div>
    );
};

export default ProfileInfo;