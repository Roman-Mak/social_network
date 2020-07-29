import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, setPhoto, updateStatus} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    };

    componentDidMount() {
        this.refreshProfile();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    };

    render = () => {
      return (
          <Profile isOwner={!this.props.match.params.userId}
                   profile={this.props.profile}
                   updateStatus={this.props.updateStatus}
                   status={this.props.status}
                   setPhoto={this.props.setPhoto}/>
      )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile, updateStatus, getUserStatus, setPhoto})
)(ProfileContainer);