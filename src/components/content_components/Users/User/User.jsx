import React, {useState} from "react";
import style from "./User.module.css"
import {NavLink, Redirect} from "react-router-dom";
import userPhoto from "./../../../../assets/images/user-01.png"
import {MESSAGES_PATH, PROFILE_PATH} from "../../../Routes/Routes";

const User = ({user, followingInProcess, unfollowUser, followUser}) => {
    const [openDialog, setOpenDialog] = useState(false);

    if (openDialog) {
        return <Redirect to={`${MESSAGES_PATH}/${user.id}`}/>
    }

    return (
        <div className={style.user}>
            <div className={style.avatar}>
                <NavLink to={`${PROFILE_PATH}/${user.id}`}>
                    <img className={style.img} alt={"user"}
                         src={user.photos.small !== null
                             ? user.photos.small
                             : userPhoto}/>
                </NavLink>
                <span className={style.name}>{user.name}</span>
                <span className={style.status}>{user.status}</span>
                {
                    user.followed
                        ? <button className={style.followBtn}
                                  disabled={followingInProcess.some(id => id === user.id)}
                                  onClick={() => {unfollowUser(user.id)}}>unfollow</button>
                        : <button className={style.followBtn}
                                  disabled={followingInProcess.some(id => id === user.id)}
                                  onClick={() => {followUser(user.id)}}>follow</button>
                }
                <button className={style.sendBtn} onClick={() => setOpenDialog(true)}>Send Message</button>
            </div>
        </div>
    );
};

export default User;
