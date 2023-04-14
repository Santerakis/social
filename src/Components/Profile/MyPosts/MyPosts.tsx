import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {PostType} from "../../../index";

// type PostType = {
//     id: number
//     message: string
//     likesCount: string
// }
// let posts: PostType[] = [
//     {id: 1, message: 'Hi, how are you?', likesCount: '25'},
//     {id: 2, message: 'It\'s my first post', likesCount:'105'},
//     {id: 3, message: 'Hello', likesCount:'8'},
// ]
type MyPostsPropsType = {
    posts: PostType[]
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

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
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;