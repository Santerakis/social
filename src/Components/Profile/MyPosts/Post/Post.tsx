import React from 'react';
import s from './Post.module.css'


const Post = () => {
    return (
                <div className={s.item}>
                    <img src='https://kartinkof.club/uploads/posts/2022-09/1662503352_1-kartinkof-club-p-novie-i-krasivie-kartinki-muzhskoe-litso-1.jpg'/>
                    post1
                    <div>like</div>
                </div>
    );
};

export default Post;