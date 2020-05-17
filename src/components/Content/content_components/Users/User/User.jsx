import React from "react";
import style from "./User.module.css"
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <div>
                <NavLink to={`/profile/${props.user.id}`}>
                <img className={style.img}
                     src={props.user.photos.small !== null ? props.user.photos.small :"https://pbs.twimg.com/profile_images/1030941554763096065/clDF9QRY.jpg"}/>
                </NavLink>
                {
                    props.user.followed ?
                        <button onClick={() => props.unfollow(props.user.id)}>unfollow</button> :
                        <button onClick={() => props.follow(props.user.id)}>follow</button>
                }
            </div>
            <div>
                <div>
                    <span>{props.user.name}</span>
                    <span>{props.user.status}</span>
                </div>
                <span>{"props.user.country"}</span>
                <span>{"props.user.city"}</span>
            </div>
        </div>
    )
};

export default User;
