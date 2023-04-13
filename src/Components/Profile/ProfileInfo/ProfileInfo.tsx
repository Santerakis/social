import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div><img className={s.palImg} src='https://oboinastol.net/katalog_kartinok/tom16/032/skachat_oboi_1920x1080.jpg'/></div>
            <div className={s.discriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;