import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7418;
        }
        this.props.getUserProfile(userId)
    }

    render = () => {
      return (
          <Profile profile={this.props.profile}/>
      )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile})
)(ProfileContainer);