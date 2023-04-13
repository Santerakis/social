import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?'/>
                <Post message="It's my first post"/>
                <Post message='Hello'/>
            </div>
        </div>

    );
};

export default MyPosts;