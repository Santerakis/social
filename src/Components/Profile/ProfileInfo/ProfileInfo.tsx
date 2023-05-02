import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileResponseType} from "../ProfileContainer";
import Loader from "../../../common/preloader/Loader";


type ProfileInfoType = {
    userProfile: ProfileResponseType
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
                <img src={props.userProfile.photos.large}/>
                description
            </div>
        </div>
    );
};

export default ProfileInfo;