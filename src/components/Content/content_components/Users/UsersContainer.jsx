import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentPage, getUsers, followUser, unfollowUser} from "../../../../redux/usersReducer";
import Preloader from "../../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
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
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess,
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {followUser, unfollowUser, setCurrentPage, getUsers})
)(UsersContainer);

