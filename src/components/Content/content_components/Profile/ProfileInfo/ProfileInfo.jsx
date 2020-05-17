import style from "./ProfileInfo.module.css";
import head_img from "./img/headimg.jpg";
import avatar from "./img/wolf.jpg";
import React from "react";
import Preloader from "../../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
       return <Preloader/>
    }
    return (
        // <div className={style.profileInfo}>
        //     <img className={style.head_img} src={head_img}/>
        //     <div className={style.information}>
        //         <img className={style.avatar} src={avatar}/>
        //         <div className={style.description}>
        //             <div className={style.name}>Roman Makarevich</div>
        //             <div>City: Minsk</div>
        //             <div>21 years old</div>
        //             <div>Website: instagram.com/myPage/</div>
        //         </div>
        //     </div>
        // </div>
        <div className={style.profileInfo}>
            <img className={style.head_img} src={head_img}/>
            <div className={style.information}>
                <img className={style.avatar} src={props.profile.photos.large}/>
                <div className={style.description}>
                    <div className={style.name}>{props.profile.fullName}</div>
                    <div>City: Minsk</div>
                    <div>{props.profile.contacts.facebook}/</div>
                    <div>{props.profile.aboutMe}</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo