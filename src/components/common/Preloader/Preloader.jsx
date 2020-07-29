import preloader from "../../../assets/images/preloader.svg";
import style from "./Preloader.module.css"
import React from "react";

const Preloader = () => {
    return (
    <div className={style.preloader}>
        <img src={preloader} alt={"Loading..."}/>
    </div>
    )
};

export default Preloader;