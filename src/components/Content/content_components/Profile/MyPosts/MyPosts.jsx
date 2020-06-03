import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post message={post.message}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                    <textarea
                        className={style.newPost}
                        placeholder="Share your status..."
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                <button onClick={onAddPost} className={style.sendButton}>Send</button>
            </div>
            {postElements};
        </div>
    )
};

export default MyPosts