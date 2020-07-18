import React from "react";
import User from "./User/User";
import style from "./Users.module.css"
import Paginator from "../../common/Paginator/Paginator";

const Users = ({users, followUser, unfollowUser, followingInProcess,
                   totalUsersCount, currentPage, pageSize, onPageChanged}) => {
        let usersList = users.map(user => {
            return <User
                key={user.id}
                user={user}
                followUser={followUser}
                unfollowUser={unfollowUser}
                followingInProcess={followingInProcess}
            />
        });
        return (
            <div>
                <Paginator totalUsersCount={totalUsersCount}
                           currentPage={currentPage}
                           pageSize={pageSize}
                           onPageChanged={onPageChanged}/>
                <div>
                    {usersList}
                </div>
            </div>
        )
};

export default Users;
