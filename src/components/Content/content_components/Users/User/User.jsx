import React from "react";
import style from "./User.module.css"

const User = (props) => {
    return (
        <div>
            <div>
                <img className={style.img} src={"https://pbs.twimg.com/profile_images/1030941554763096065/clDF9QRY.jpg"}/>
                {
                    props.user.followed ?
                    <button onClick={() => props.unfollow(props.user.id)}>unfollow</button> :
                    <button onClick={() => props.follow(props.user.id)}>follow</button>
                }
            </div>
            <div>
                <span>{props.user.name}</span>
                <span>{props.user.status}</span>
                <span>{props.user.country}</span>
                <span>{props.user.city}</span>
            </div>
        </div>
    )
};

export default User;
