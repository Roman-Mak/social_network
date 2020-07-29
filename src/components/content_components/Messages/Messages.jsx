import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControl";
import Preloader from "../../common/Preloader/Preloader";

const Messages = ({dialogs, messages, sendMessage, selectedDialogId, resetForm,
                      dialogsIsFetching, messagesIsFetching}) => {
    const dialogsElements = dialogs.map(d => {
        return <Dialog key={d.id} name={d.userName} id={d.id} photos={d.photos.small}/>
    });
    const messagesItems = messages.map(m => {
        return <Chat key={m.id} message={m.body} sender={m.senderName} addedAt={m.addedAt} senderId={m.senderId}/>
    });

    const sendNewMessage = (formData) => {
        sendMessage(selectedDialogId, formData.newMessageText);
        resetForm("newMessage");
    };

    return (
        <div className={style.messages}>
            {dialogsIsFetching
                ? <div style={{width: "300px"}}><Preloader/></div>
                : <div className={style.dialogs}>
                    {dialogsElements}
                </div>}
            {
                selectedDialogId
                    ? <div className={style.chats}>
                        {messagesIsFetching && <div className={style.noMessages}><Preloader/></div>}
                        {messagesItems.length > 0 && !messagesIsFetching  && messagesItems}
                        {!messagesIsFetching && messagesItems.length === 0
                        && <div className={style.noMessages}>No messages</div>}
                        <AddMessageReduxForm onSubmit={sendNewMessage}/>
                    </div>
                    : <div className={style.select}>Please select dialog</div>
            }
        </div>
    )
};

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <Field name={"newMessageText"} component={Textarea}
                   style={{width: "495px", height: "50px", resize: "none"}}
                   placeholder={"Write your message..."}/>
            <button>Send</button>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({form: "newMessage"})(AddMessageForm);

export default Messages