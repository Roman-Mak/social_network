import React from "react";
import logo from '../../img/lion.jpg'
import style from './Header.module.css'

const Header = () => {
    return <header className={style.header}>
        <img className={style.logo} src={logo}/>
    </header>
}

export default Header;