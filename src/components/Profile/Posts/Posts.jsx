import React from "react";
import style from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} id={post.id} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            my posts
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement} cols="30" rows="10"
                          value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                posts
                {postsElements}
            </div>
        </div>
    );
};

export default Posts;