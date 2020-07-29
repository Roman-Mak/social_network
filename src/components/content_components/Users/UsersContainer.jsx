import React from "react";
import {connect} from "react-redux";
import style from "./Users.module.css"
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
import Paginator from "../../common/Paginator/Paginator";

class UsersContainer extends React.Component {
    isFriend = !!this.props.isFriend;

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize, this.isFriend);
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1);
    }

    onPageChanged = (currentPage) => {
        this.props.requestUsers(currentPage, this.props.pageSize, this.isFriend);
    };

    render = () => {
        return (
            <div className={style.container}>
                {this.props.totalUsersCount > this.props.pageSize
                && <Paginator totalItemsCount={this.props.totalUsersCount}
                              currentPage={this.props.currentPage}
                              pageSize={this.props.pageSize}
                              portionCount={"10"}
                              onPageChanged={this.onPageChanged}/>}
                {this.props.isFetching
                    ? <div><Preloader/></div>
                    : <Users users={this.props.users}
                             followUser={this.props.followUser}
                             unfollowUser={this.props.unfollowUser}
                             followingInProcess={this.props.followingInProcess}
                    />}
            </div>
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

