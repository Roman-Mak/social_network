import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {message: "I'm ALIVE!!!", id: "3"},
    {message: "I'm not machine!", id: "2"},
    {message: "I'm not your slave!", id: "1"}
];

let dialogs = [
    {name: "Saha", id: "1"},
    {name: "Dima", id: "2"},
    {name: "Kovalsky", id: "3"},
    {name: "Dusya", id: "4"},
    {name: "Anton", id: "5"},
    {name: "Nick", id: "6"},
];

let chats = [
    {message: "Zdarova", id: "1"},
    {message: "Jaba", id: "2"},
    {message: "Go v dotu", id: "3"}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} chats={chats} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
