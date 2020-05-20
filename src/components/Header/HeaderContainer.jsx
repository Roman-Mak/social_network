import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserLoginData, toggleIsAuth} from "../../redux/authReducer";
import * as axios from "axios";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    if (response.data.messages[0] !== "You are not authorized") {
                        let {id, email, login} = response.data.data;
                        this.props.setUserLoginData(id, email, login);
                        this.props.toggleIsAuth(true);
                    }
                }
            });
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

export default connect(mapStateToProps, {setUserLoginData, toggleIsAuth})(HeaderContainer);