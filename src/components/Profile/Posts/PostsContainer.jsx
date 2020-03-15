import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = () => {

    return <StoreContext.Consumer>
        {
        (store) => {
            let state =store.getState();

            let addPost =  () => {
                store.dispatch(addPostActionCreator());
            };

            let onPostChange = (text) => {
                store.dispatch(onPostChangeActionCreator(text));
            };

            return <Posts updateNewPostText={onPostChange}
                          addPost={addPost}
                          posts={state.profilePage.postsData}
                          newPostText={state.profilePage.newPostText}/>
        }
    }
    </StoreContext.Consumer>
};

export default PostsContainer;