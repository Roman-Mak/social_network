import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {userLogin} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {PROFILE_PATH} from "../../Routes/Routes";

const Login = ({isAuth, userLogin}) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;
        userLogin(email, password, rememberMe);
    };

    if (isAuth) {
        return <Redirect to={PROFILE_PATH}/>
    }

    return (
        <div>
            <h1>Sign In</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {userLogin})(Login);