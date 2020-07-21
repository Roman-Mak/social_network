import React from "react";
import logo from "../../assets/images/logo.png"
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/user-01.png"
import {LOGIN_PATH} from "../Routes/Routes";

const Header = ({isAuth, login, userLogout}) => {
    return (
        <header className={style.header}>
            <div className={style.brand}>Social Network
                <img className={style.logo} src={logo} alt={""}/>
            </div>
            <div className={style.login}>
                {
                    isAuth
                        ? <div className={style.loginBlock}>
                            <img className={style.avatar} src={avatar} alt={""}/>
                            <div>
                                <div>{login}</div>
                                <button onClick={userLogout}>Log Out</button>
                            </div>
                        </div>
                        : <button><NavLink to={LOGIN_PATH}>Sign In</NavLink></button>
                }
            </div>
        </header>
    );
};

export default Header;