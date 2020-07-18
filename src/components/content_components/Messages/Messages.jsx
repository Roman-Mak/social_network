import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";
import {Route} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControl";
import {maxLength, required} from "../../../utils/vallidators";

const Messages = ({dialogs, addMessage, messageText}) => {
    let dialogsElement = dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let chatsElement = dialogs.map(dialog => dialog.chats.map(chat => <Chat key={chat.id} message={chat.message}/>));
    let chatsElementRoute = chatsElement.map((el, i) => {
        return <Route path={`/messages/${i + 1}`} render={() => chatsElement[i]}/>
    });

    let sendNewMessage = (formData) => {
        addMessage(formData.newMessageText);
    };

    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {dialogsElement}
            </div>
            <div className={style.chats}>
                {/*{chatsElementRoute}*/}
                <div>{messageText}</div>
                <AddMessageReduxForm onSubmit={sendNewMessage}/>
            </div>
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