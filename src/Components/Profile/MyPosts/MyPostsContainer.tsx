import React, {Dispatch} from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {ActionType, RootStateType} from "../../../redux/reduxStore";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//
//                     const onAddPost = () => {
//                         store.dispatch(addPostAC())
//                     }
//                     const onPostChange = (newText: string) => {
//                         store.dispatch(updateNewPostTextAC(newText))
//                     }
//
//                     return <MyPosts posts={state.profilePage.posts}
//                                     newPostText={state.profilePage.newPostText}
//                                     onAddPost={onAddPost}
//                                     onPostChange={onPostChange}
//                     />
//                 }
//
//             }
//         </StoreContext.Consumer>
//
//     );
// };
// export default MyPostsContainer;

const mapStateToProps = (state: RootStateType) => ({profilePage: state.profilePage})
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        onAddPost: () => {
            debugger
            dispatch(addPostAC())
        },
        onPostChange: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;