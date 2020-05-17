import React from "react";
import style from "./Content.module.css";
import {Route} from "react-router-dom";
import Friends from "./content_components/Friends/Friends";
import News from "./content_components/News/News";
import Music from "./content_components/Music/Music";
import Settings from "./content_components/Settings/Settings";
import MessagesContainer from "./content_components/Messages/MessagesContainer";
import UsersContainer from "./content_components/Users/UsersContainer";
import ProfileContainer from "./content_components/Profile/ProfileContainer";

const Content = () => {
    return (
            <div className={style.content}>
                <Route path="/profile" render={() => <ProfileContainer />}/>
                <Route path="/messages" render={() => <MessagesContainer />}/>
                <Route path="/friends" render={() => <Friends/>}/>
                <Route path="/news" render={() => <News />}/>
                <Route path="/music" render={() => <Music />}/>
                <Route path="/settings" render={() => <Settings />}/>
                <Route path="/users" render={() => <UsersContainer />}/>
            </div>
    );
};

export default Content;