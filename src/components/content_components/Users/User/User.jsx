import React from "react";
import style from "./User.module.css"
import {NavLink} from "react-router-dom";

const User = ({user, followingInProcess, unfollowUser, followUser}) => {
    return (
        <div className={style.user}>
            <div className={style.avatar}>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={style.img} alt={"user"}
                         src={user.photos.small !== null
                             ? user.photos.small
                             : "https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"}/>
                </NavLink>
                <span>{user.name}</span>
                <span>{user.status}</span>
                {
                    user.followed
                        ? <button disabled={followingInProcess.some(id => id === user.id)}
                                  onClick={() => {unfollowUser(user.id)}}>unfollow</button>
                        : <button disabled={followingInProcess.some(id => id === user.id)}
                                  onClick={() => {followUser(user.id)}}>follow</button>
                }
            </div>
        </div>
    );
};

export default User;
