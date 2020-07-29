import React from "react";
import User from "./User/User";
import style from "./Users.module.css"

const Users = ({users, followUser, unfollowUser, followingInProcess,}) => {
    let usersList = users.map(user => {
        return <User key={user.id} user={user} followUser={followUser} unfollowUser={unfollowUser}
            followingInProcess={followingInProcess}/>
    });
    return (
        <div className={style.usersPage}>
            <div>
                {usersList}
            </div>
        </div>
    )
};

export default Users;
