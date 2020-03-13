import style from "./ProfileInfo.module.css";
import head_img from "./img/headimg.jpg";
import avatar from "./img/wolf.jpg";
import React from "react";

const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <img className={style.head_img} src={head_img}/>
            <div className={style.information}>
                <img className={style.avatar} src={avatar}/>
                <div className={style.description}>
                    <div className={style.name}>Roman Makarevich</div>
                    <div>City: Minsk</div>
                    <div>21 years old</div>
                    <div>Website: instagram.com/myPage/</div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo