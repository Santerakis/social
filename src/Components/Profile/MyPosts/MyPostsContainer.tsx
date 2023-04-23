import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const onAddPost = () => {
                        store.dispatch(addPostAC())
                    }
                    const onPostChange = (newText: string) => {
                        store.dispatch(updateNewPostTextAC(newText))
                    }

                    return <MyPosts posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}
                                    onAddPost={onAddPost}
                                    onPostChange={onPostChange}
                    />
                }

            }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;