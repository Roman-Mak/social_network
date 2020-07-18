import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {
    FRIENDS_PATH,
    MESSAGES_PATH,
    MUSIC_PATH,
    NEWS_PATH,
    PROFILE_PATH,
    SETTINGS_PATH,
    USERS_PATH
} from "../Routes/Routes";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={PROFILE_PATH} activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={FRIENDS_PATH} activeClassName={style.active}>Friends</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={MESSAGES_PATH} activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={NEWS_PATH} activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={MUSIC_PATH} activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={SETTINGS_PATH} activeClassName={style.active}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={USERS_PATH} activeClassName={style.active}>Users</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;