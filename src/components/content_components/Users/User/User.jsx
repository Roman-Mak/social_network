import React from "react";
import style from "./User.module.css"
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <div>
                <NavLink to={`/profile/${props.user.id}`}>
                <img className={style.img} alt={"user"}
                     src={props.user.photos.small !== null ? props.user.photos.small :"https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"}/>
                </NavLink>
                {
                    props.user.followed
                        ? <button disabled={props.followingInProcess.some(id => id === props.user.id)}
                                onClick={() => {props.unfollowUser(props.user.id)}}>unfollow</button>
                        : <button disabled={props.followingInProcess.some(id => id === props.user.id)}
                                onClick={() => {props.followUser(props.user.id)}}>follow</button>
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
