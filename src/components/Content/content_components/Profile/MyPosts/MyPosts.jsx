import avatar from "../ProfileInfo/img/wolf.jpg"
import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const MyPosts = () => {

    let posts = [
        {message: "I'm ALIVE!!!", id: "3"},
        {message: "I'm not machine!", id: "2"},
        {message: "I'm not your slave!", id: "1"}
    ];

    let postElements = posts.map(post => <Post message={post.message}/>);

    return (
        <div>
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                <div className={style.newPost}>
                    <input type="text" placeholder="Share your status..."/>
                </div>
                <button className={style.sendButton}>Send</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts