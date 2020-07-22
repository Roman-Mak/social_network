import React from "react";
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = ({id, name}) => {
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={"/messages/" + id}>{name}</NavLink>
        </div>
    )
};

export default Dialog