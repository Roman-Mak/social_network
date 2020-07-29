import React, {Suspense} from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import ProfileContainer from "../content_components/Profile/ProfileContainer";
import UsersContainer from "../content_components/Users/UsersContainer";
import Login from "../content_components/Login/Login";
import Preloader from "../common/Preloader/Preloader";

const MessagesContainer = React.lazy(() => import("../content_components/Messages/MessagesContainer"));
const Friends = React.lazy(() => import("../content_components/Friends/Friends"));
const Settings = React.lazy(() => import("../content_components/Settings/Settings"));

export const PROFILE_PATH = "/profile";
export const MESSAGES_PATH = "/messages";
export const FRIENDS_PATH = "/friends";
export const SETTINGS_PATH = "/settings";
export const USERS_PATH = "/users";
export const LOGIN_PATH = "/login";

const Routes = () => {
    return (
        <div>
            <Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={PROFILE_PATH}/>}/>
                    <Route path={PROFILE_PATH + "/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={MESSAGES_PATH + "/:userId?"} render={(props) => <MessagesContainer userId={props.match.params.userId}/>}/>
                    <Route path={FRIENDS_PATH} render={() => <Friends/>}/>
                    <Route path={SETTINGS_PATH} render={() => <Settings/>}/>
                    <Route path={USERS_PATH} render={() => <UsersContainer/>}/>
                    <Route path={LOGIN_PATH} render={() => <Login/>}/>
                </Switch>
            </Suspense>
        </div>
    );
};

export default withRouter(Routes);