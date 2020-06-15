import React from "react";
import logo from '../../img/lion.jpg'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/wolf.jpg"

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.brand}>Social Network
                <img className={style.logo} src={logo}/>
            </div>
            <div className={style.login}>
                {props.isAuth
                    ? <div className={style.loginBlock}>
                        <img className={style.avatar} src={avatar}/>
                        <div>
                            <div>{props.login}</div>
                            <button onClick={props.userLogout}>Log Out</button>
                        </div>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;