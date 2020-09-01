import React from "react";
import LoginForm from "./LoginForm";
import style from "./Login.module.css";
import {connect} from "react-redux";
import {getCaptchaUrl, userLogin} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {PROFILE_PATH} from "../../Routes/Routes";

const Login = ({isAuth, userLogin, captchaUrl}) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe, captcha} = formData;
        userLogin(email, password, rememberMe, captcha);
    };

    if (isAuth) {
        return <Redirect to={PROFILE_PATH}/>
    }

    return (
        <>
            <div className={style.login}>
                <h1>Sign In</h1>
                <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
            <div>
                <div>Test account</div>
                <div>Email: free@samuraijs.com</div>
                <div>Password: free</div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
};

export default connect(mapStateToProps, {userLogin, getCaptchaUrl})(Login);