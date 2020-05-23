import React from "react";
import style from "./User.module.css"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../../../api/api";

const User = (props) => {
    let follow = () => {
        props.toggleFollowingInProcess(true, props.user.id);
        usersAPI.followUser(props.user.id)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(props.user.id);
                    props.toggleFollowingInProcess(false, props.user.id);
                }
            });
    };
    let unfollow = () => {
        props.toggleFollowingInProcess(true, props.user.id);
        usersAPI.unfollowUser(props.user.id)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollow(props.user.id);
                    props.toggleFollowingInProcess(false, props.user.id);
                }
            });
    };

    return (
        <div>
            <div>
                <NavLink to={`/profile/${props.user.id}`}>
                <img className={style.img}
                     src={props.user.photos.small !== null ? props.user.photos.small :"https://pbs.twimg.com/profile_images/1030941554763096065/clDF9QRY.jpg"}/>
                </NavLink>
                {
                    props.user.followed ?
                        <button disabled={props.followingInProcess.some(id => id === props.user.id)} onClick={unfollow}>unfollow</button> :
                        <button disabled={props.followingInProcess.some(id => id === props.user.id)} onClick={follow}>follow</button>
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
