import React from "react";
import style from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} id={post.id} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={style.postsContainer}>
            <div className={style.textAreaWrapper}>
                <textarea className={style.textArea}
                          onChange={onPostChange}
                          ref={newPostElement} cols="30" rows="10"
                          value={props.newPostText} placeholder={'Write what you wish'}/>
                <button className={style.publishButton}
                        onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                posts
                {postsElements}
            </div>
        </div>
    );
};

export default Posts;