import React from "react";
import logo from '../../img/lion.jpg'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={style.header}>
        <img className={style.logo} src={logo}/>
        <div className={style.login}>
            {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
};

export default Header;