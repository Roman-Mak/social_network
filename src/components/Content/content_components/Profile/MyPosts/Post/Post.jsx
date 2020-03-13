import avatar from "../../ProfileInfo/img/wolf.jpg"
import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
    return <div className={style.post}>
        <div><img className={style.avatar} src={avatar}/>{props.message}</div>
    </div>
}

export default Post