import React from "react";
import User from "./User/User";
import * as axios from "axios";
import style from "./Users.module.css"

class Users extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }

    getUsers = (currentPage) => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    };

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render = () => {
        let usersList = this.props.users.map(user => {
            return <User key={user.id} user={user} follow={this.props.follow} unfollow={this.props.unfollow}/>
        });

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {pages.map(p => <span className={this.props.currentPage === p && style.selectedPage}
                onClick={() => this.onPageChanged(p)}>{p} </span>)}
                <div>
                    {usersList}
                </div>
            </div>
        )
    }
}

export default Users;
