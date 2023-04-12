import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className='content'>
            <div><img className={s.palImg} src='https://oboinastol.net/katalog_kartinok/tom16/032/skachat_oboi_1920x1080.jpg'/></div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;