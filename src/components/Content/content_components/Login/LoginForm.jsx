import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControl";
import {required} from "../../../../utils/vallidators";

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"email"} type={"email"} placeholder={"Login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={"password"} type={"password"} placeholder={"Password"} component={Input} validate={[required]}/>
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