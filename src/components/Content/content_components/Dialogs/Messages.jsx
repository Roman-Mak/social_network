import React from "react";
import style from "./Messages.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Chat = (props) => {
    return (
        <div className={style.chat}>{props.message}</div>
    )
}

const Messages = () => {
    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                <Dialog name="Saha" id="1"/>
                <Dialog name="Dima" id="2"/>
                <Dialog name="Kovalsky" id="3"/>
                <Dialog name="Dusya" id="4"/>
                <Dialog name="Anton" id="5"/>
                <Dialog name="Nick" id="6"/>
            </div>
            <div className={style.chats}>
                <Chat message="Zdarova"/>
                <Chat message="Jaba"/>
                <Chat message="Go v dotu"/>
            </div>
        </div>
    )
}

export default Messages