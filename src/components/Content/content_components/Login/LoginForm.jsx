import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"login"} type={"text"} placeholder={"Login"} component={"input"}/>
            </div>
            <div>
                <Field name={"password"} type={"text"} placeholder={"Password"} component={"input"}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={"input"}/>
                <span>remember me</span>
            </div>
            <button>Sign In</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;