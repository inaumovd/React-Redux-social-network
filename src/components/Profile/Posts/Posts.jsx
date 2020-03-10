import React from "react";
import style from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";

const Posts = (props) => {
    let postsElements = props.state.postsData.map(post => <Post message={post.message} id={post.id} />);

    let newPostElement = React.createRef();

    let addPost =  () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    };

    return (
        <div>
            my posts
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement } cols="30" rows="10"
                          value={props.state.newPostText}/>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={style.posts}>
                posts
                {postsElements}
            </div>
        </div>
    );
};

export default Posts;