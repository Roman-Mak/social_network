import avatar from "../ProfileInfo/img/wolf.jpg"
import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {

    return (
        <div>
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                <div className={style.newPost}>
                    <input type="text" placeholder="Share your status..."/>
                </div>
                <button className={style.sendButton}>Send</button>
            </div>
            {props.posts};
        </div>
    )
}

export default MyPosts