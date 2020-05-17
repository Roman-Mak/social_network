import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../../../redux/usersReducer";
import * as axios from "axios";
import Preloader from "../../../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    getUsers = (currentPage) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.getUsers(currentPage);
    };

    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(followAC(userId)),
//         unfollow: (userId) => dispatch(unfollowAC(userId)),
//         setUsers: (users) => dispatch(setUsersAC(users)),
//         setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
//         setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//         toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
//     }
// };

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching})(UsersContainer);

