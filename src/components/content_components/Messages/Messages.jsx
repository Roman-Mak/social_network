import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControl";
import {maxLength, required} from "../../../utils/vallidators";

const Messages = ({dialogs, messages, addMessage, messageText, selectedDialogId}) => {
    const dialogsElements = dialogs.map(d => <Dialog key={d.id} name={d.userName} id={d.id}/>);
    const messagesItems = messages.map(m => <Chat key={m.key} message={m.body} sender={m.senderName}/>);
    // let chatsElement = dialogs.map(dialog => dialog.chats.map(chat => <Chat key={chat.id} message={chat.message}/>));
    // let chatsElementRoute = chatsElement.map((el, i) => {
    //     return <Route path={`/messages/${i + 1}`} render={() => chatsElement[i]}/>
    // });

    const sendNewMessage = (formData) => {
        addMessage(formData.newMessageText);
    };

    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            {
                selectedDialogId
                    ? <div className={style.chats}>
                        {messagesItems}
                        {/*<div>{messageText}</div>*/}
                        <AddMessageReduxForm onSubmit={sendNewMessage}/>
                    </div>
                    : <div>Please select dialog</div>
            }
        </div>
    )
};

const maxLength100 = maxLength(100);

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={"newMessageText"} component={Textarea} validate={[required, maxLength100]}/>
            <button>Send</button>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({form: 'newMessage'})(AddMessageForm);

export default Messages