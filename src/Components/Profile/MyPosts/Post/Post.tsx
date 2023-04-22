import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string
    likesCount: number
    id: number
}

const Post = (props: PostType) => {
    return (
                <div key={props.id} className={s.item}>
                    <img src='https://kartinkof.club/uploads/posts/2022-09/1662503352_1-kartinkof-club-p-novie-i-krasivie-kartinki-muzhskoe-litso-1.jpg'/>
                    {props.message}
                    👍{props.likesCount}
                </div>
    );
};

export default Post;