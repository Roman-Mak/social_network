import React, {Suspense} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import ProfileContainer from "../content_components/Profile/ProfileContainer";
// import MessagesContainer from "../content_components/Messages/MessagesContainer";
// import Friends from "../content_components/Friends/Friends";
// import News from "../content_components/News/News";
// import Music from "../content_components/Music/Music";
// import Settings from "../content_components/Settings/Settings";
import UsersContainer from "../content_components/Users/UsersContainer";
import Login from "../content_components/Login/Login";
import Preloader from "../common/Preloader/Preloader";

const MessagesContainer = React.lazy(() => import("../content_components/Messages/MessagesContainer"));
const Friends = React.lazy(() => import("../content_components/Friends/Friends"));
const News = React.lazy(() => import("../content_components/News/News"));
const Music = React.lazy(() => import("../content_components/Music/Music"));
const Settings = React.lazy(() => import("../content_components/Settings/Settings"));

export const PROFILE_PATH = "/profile";
export const MESSAGES_PATH = "/messages";
export const FRIENDS_PATH = "/friends";
export const NEWS_PATH = "/news";
export const MUSIC_PATH = "/music";
export const SETTINGS_PATH = "/settings";
export const USERS_PATH = "/users";
export const LOGIN_PATH = "/login";

const Routes = () => {
    return (
        <div className="content">
            <Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route path={PROFILE_PATH + "/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={MESSAGES_PATH} render={() => <MessagesContainer/>}/>
                    <Route path={FRIENDS_PATH} render={() => <Friends/>}/>
                    <Route path={NEWS_PATH} render={() => <News/>}/>
                    <Route path={MUSIC_PATH} render={() => <Music/>}/>
                    <Route path={SETTINGS_PATH} render={() => <Settings/>}/>
                    <Route path={USERS_PATH} render={() => <UsersContainer/>}/>
                    <Route path={LOGIN_PATH} render={() => <Login/>}/>
                </Switch>
            </Suspense>
        </div>
    );
};

export default withRouter(Routes);