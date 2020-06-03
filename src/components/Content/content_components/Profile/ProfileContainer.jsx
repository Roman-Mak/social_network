import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7418;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render = () => {
      return (
          <Profile profile={this.props.profile} updateStatus={this.props.updateStatus} status={this.props.status}/>
      )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

export default compose(
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile, updateStatus, getUserStatus})
)(ProfileContainer);