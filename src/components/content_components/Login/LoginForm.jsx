import React from "react";
import style from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControl";
import {required} from "../../../utils/vallidators";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <div>
                <Field name={"email"} type={"email"} placeholder={"Login"}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={"password"} type={"password"} placeholder={"Password"}
                       component={Input} validate={[required]}/>
            </div>
            <div className={style.rememberMe}>
                <Field name={"rememberMe"} type={"checkbox"} component={"input"}/>
                <span>remember me</span>
            </div>
            {captchaUrl && <div className={style.captcha}>
                <img src={captchaUrl} alt={"captcha"}/>
                <Field name={"captcha"} type={"text"} placeholder={"Symbols from image"} component={Input}
                       validate={[required]}/>
            </div>}
            <button>Sign In</button>
            {error && <div style={{color: "red"}}>{error}</div>}
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default LoginReduxForm;