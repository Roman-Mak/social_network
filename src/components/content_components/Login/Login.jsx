import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {userLogin} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const { isAuth, userLogin } = props;

    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;
        userLogin(email, password, rememberMe);
    };

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Sign In</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {userLogin})(Login);