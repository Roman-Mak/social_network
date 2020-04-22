import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../redux/profileReducer";

const MyPosts = (props) => {

    let postElements = props.profilePage.posts.map(post => <Post message={post.message}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                <div className={style.newPost}>
                    <textarea
                        placeholder="Share your status..."
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                    />
                </div>
                <button onClick={addPost} className={style.sendButton}>Send</button>
            </div>
            {postElements};
        </div>
    )
};

export default MyPosts