import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, toggleFollowingInProcess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../../../redux/usersReducer";
import Preloader from "../../../common/Preloader/Preloader";
import {usersAPI} from "../../../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsers();
    }

    getUsers = (currentPage = 1) => {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
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
                       followingInProcess={this.props.followingInProcess}
                       toggleFollowingInProcess={this.props.toggleFollowingInProcess}
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
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess,
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingInProcess})(UsersContainer);

