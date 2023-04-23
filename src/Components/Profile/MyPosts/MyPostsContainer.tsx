import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

type MyPostsContainerPropsType = {
    store: any
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState()

    const onAddPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (newText: string) => {
            props.store.dispatch(updateNewPostTextAC(newText))
        }

    return (
        <div>
            <MyPosts posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
                     onAddPost={onAddPost}
                     onPostChange={onPostChange}
            />
        </div>
    );
};

export default MyPostsContainer;