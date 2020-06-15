import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserLoginData, userLogout} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserLoginData();
    }

    render = () => {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    login: state.auth.login
});

export default connect(mapStateToProps, {getUserLoginData, userLogout})(HeaderContainer);