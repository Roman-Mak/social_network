import avatar from "../../../../../../assets/images/wolf.jpg"
import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.header}>
                <img className={style.avatar} src={avatar}/>
                <div className={style.postInfo}>
                    <span>markel</span>
                    <span>on 15th July, 2019</span>
                </div>
            </div>
            <div className={style.messageArea}>
                <span>{props.message}</span>
            </div>
        </div>
    )
};

export default Post