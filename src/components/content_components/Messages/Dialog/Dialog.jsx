import React from "react";
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../../assets/images/user-01.png"

const Dialog = ({id, name, photos}) => {
    return (
        // <div>
            <NavLink to={"/messages/" + id} className={style.dialog} activeClassName={style.active}>
                <img src={photos ? photos : userPhoto} alt={"avatar"}/>
                {name}
            </NavLink>
        // </div>
    )
};

export default Dialog