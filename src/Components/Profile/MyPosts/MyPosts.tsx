import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {ActionType, addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let refOnDomElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostAC())                                       // props.addPost(refFordomElement.current?.value)
    }                                                        // можно через if refFordomElement.current или refFordomElement.current&&refFordomElement.current.value
                                                            // если у current undefiner|null  то не брать свойство value, а остановиться на current = null
    let onPostChange = () => {
        if (refOnDomElement.current) {
            let newText = refOnDomElement.current.value
            props.dispatch(updateNewPostTextAC(newText))
        }
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={refOnDomElement} value={props.newPostText} onChange={onPostChange}/>
                </div>

                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;