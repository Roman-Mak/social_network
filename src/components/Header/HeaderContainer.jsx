import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {userLogout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    render = () => {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    login: state.auth.login
});

export default connect(mapStateToProps, {userLogout})(HeaderContainer);