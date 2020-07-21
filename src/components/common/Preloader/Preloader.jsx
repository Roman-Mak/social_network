import preloader from "../../../assets/images/preloader.svg";
import React from "react";

const Preloader = (props) => {
    return (
    <>
        <img src={preloader} alt={"Loading..."}/>
    </>
    )
};

export default Preloader;