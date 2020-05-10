import React from "react";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    };
    // props.setUsers( [
    //     {id: 1, name: "Roman", status: "Yo guys", country: "Belarus", city: "Minsk", followed: true},
    //     {id: 2, name: "Alexandr", status: "Yo guys", country: "Belarus", city: "Minsk", followed: false},
    //     {id: 3, name: "Max", status: "Yo guys", country: "Belarus", city: "Minsk", followed: false},
    //     {id: 4, name: "Anton", status: "Yo guys", country: "Belarus", city: "Minsk", followed: false}
    //     ])
    usersList = this.props.users.map(user => {
        return <User key={user.id} user={user} follow={this.props.follow} unfollow={this.props.unfollow}/>
    });

    render = () => {
        return (
            <div>
                <button onClick={this.getUsers}>get users</button>
                {this.usersList}
            </div>
        )
    }
}

export default Users;
