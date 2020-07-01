import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentPage, requestUsers, followUser, unfollowUser} from "../../../redux/users/usersReducer";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProcess,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../../redux/users/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.requestUsers(currentPage, this.props.pageSize);
    };

    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}
                       onPageChanged={this.onPageChanged}
                       followingInProcess={this.props.followingInProcess}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state),
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {followUser, unfollowUser, setCurrentPage, requestUsers})
)(UsersContainer);

