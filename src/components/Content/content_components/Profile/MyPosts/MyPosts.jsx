import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message}/>);

    let newPostEl = React.createRef();

    let addPost = () => {
        let text = newPostEl.current.value;
        newPostEl.current.value = "";
        props.addPost(text);
    };

    return (
        <div>
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                <div className={style.newPost}>
                    <textarea ref={newPostEl} type="text" placeholder="Share your status..."></textarea>
                </div>
                <button onClick={addPost} className={style.sendButton}>Send</button>
            </div>
            {postElements};
        </div>
    )
};

export default MyPosts