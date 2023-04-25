import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {PostType, ProfilePageType} from "../../../redux/store";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    onAddPost: () => void
    onPostChange: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }
    const onAddPost = () => {
        props.onAddPost()
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.newPostText} onChange={onPostChange}/>
                </div>

                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;

// const onAddPost = () => {
//     props.dispatch(addPostAC())
// }

// props.addPost(refFordomElement.current?.value)
// можно через if refFordomElement.current или refFordomElement.current&&refFordomElement.current.value
// если у current undefiner|null  то не брать свойство value, а остановиться на current = null
// let refOnDomElement = React.createRef<HTMLTextAreaElement>()
// let onPostChange = () => {
//     if (refOnDomElement.current) {
//         let newText = refOnDomElement.current.value
//         props.dispatch(updateNewPostTextAC(newText))
//     }
// }

// <textarea ref={refOnDomElement} value={props.newPostText} onChange={onPostChange}/>