import React from "react";
import style from "./Chat.module.css"
import {useSelector} from "react-redux";

const Chat = ({message, sender, senderId, addedAt}) => {
    const messageTime = addedAt.slice(11, 16);
    const yourId = useSelector((state) => state.auth.userId);
    return (
        <div className={style.chat}>
            {yourId !== senderId
                ? <div className={style.message}>
                    <div className={style.corner}/>
                    <div className={style.messageArea}>
                        <div className={style.name}>{sender}</div>
                        <div className={style.content}>{message}</div>
                        <div className={style.time}>{messageTime}</div>
                    </div>
                </div>
                : <div className={style.messageYour}>
                    <div className={style.messageAreaYour}>
                        <div className={style.nameYour}>{sender}</div>
                        <div className={style.content}>{message}</div>
                        <div className={style.time}>{messageTime}</div>
                    </div>
                    <div className={style.cornerYour}/>
                </div>}
        </div>
    );
};

// const Message = () => {
//     return (
//         <div className={style.message}>
//             <div className={style.corner} />
//             <div className={style.messageArea}>
//                 <div className={style.name}>Роман Макаревич</div>
//                 <div className={style.content}>Выполнил второе задание</div>
//                 <div className={style.time}>07:15</div>
//             </div>
//         </div>
//     );
// };

export default Chat