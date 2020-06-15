import React from "react";
import logo from '../../img/lion.jpg'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.brand}>Social Network
                <img className={style.logo} src={logo}/>
            </div>
            <div className={style.login}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;