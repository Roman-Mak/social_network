import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {

    let postElements = props.profilePage.posts.map(post => <Post message={post.message}/>);

    // let newPostEl = React.createRef();

    // let addPost = () => {
    //     props.addPost();
    // };

    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                <div className={style.newPost}>
                    <textarea
                        // ref={newPostEl}
                        placeholder="Share your status..."
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                    />
                </div>
                <button onClick={props.addPost} className={style.sendButton}>Send</button>
            </div>
            {postElements};
        </div>
    )
};

export default MyPosts