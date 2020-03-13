import React from "react";
import Profile from "./content_components/Profile/Profile";
import style from "./Content.module.css";
import Messages from "./content_components/Dialogs/Messages";
import {Route} from "react-router-dom";
import Friends from "./content_components/Friends/Friends";
import News from "./content_components/News/News";
import Music from "./content_components/Music/Music";
import Settings from "./content_components/Settings/Settings";

const Content = () => {
    return (
            <div className={style.content}>
                <Route path="/profile" component={Profile}/>
                <Route path="/dialogs" component={Messages}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
    );
}

export default Content;