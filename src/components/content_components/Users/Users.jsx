import React from "react";
import User from "./User/User";
import style from "./Users.module.css"

const Users = (props) => {
        let usersList = props.users.map(user => {
            return <User
                key={user.id}
                user={user}
                followUser={props.followUser}
                unfollowUser={props.unfollowUser}
                followingInProcess={props.followingInProcess}
            />
        });
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {pages.map(p => <span className={props.currentPage === p ? style.selectedPage : style.page}
                onClick={() => props.onPageChanged(p)} key={p}>{p} </span>)}
                <div>
                    {usersList}
                </div>
            </div>
        )
};

export default Users;
