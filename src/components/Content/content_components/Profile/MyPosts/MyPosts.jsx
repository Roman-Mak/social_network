import avatar from "../ProfileInfo/img/wolf.jpg"
import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div>
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                <div className={style.newPost}>Share your status...</div>
                <button className={style.sendButton}>Send</button>
            </div>
            <Post message="I'm ALIVE!!!"/>
            <Post message="I'm not machine!"/>
            <Post message="I'm not your slave!"/>
        </div>
    )
}

export default MyPosts