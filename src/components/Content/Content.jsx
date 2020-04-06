import React from "react";
import Profile from "./content_components/Profile/Profile";
import style from "./Content.module.css";
import Messages from "./content_components/Dialogs/Messages";
import {Route} from "react-router-dom";
import Friends from "./content_components/Friends/Friends";
import News from "./content_components/News/News";
import Music from "./content_components/Music/Music";
import Settings from "./content_components/Settings/Settings";

const Content = (props) => {
    return (
            <div className={style.content}>
                <Route path="/profile" render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPots}
                    updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path="/dialogs" render={() => <Messages
                    messagePage={props.state.messagesPage}
                    addMessage={props.addMessage}
                    updateNewMessageText={props.updateNewMessageText}
                />}/>
                <Route path="/friends" render={() => <Friends/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
    );
};

export default Content;