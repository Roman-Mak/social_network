import React from "react";
import style from "./FormsControl.module.css"

export const Textarea = ({input, meta, ...props}) => {
    const { touched, error } = meta;
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "" )}>
            <textarea  {...input} {...props}/>
            <div>{hasError && <span>{error}</span>}</div>
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    const { touched, error } = meta;
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "" )}>
            <input  {...input} {...props}/>
            <div>{hasError && <span>{error}</span>}</div>
        </div>
    )
};