import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {message: "I'm ALIVE!!!", id: "3"},
            {message: "I'm not machine!", id: "2"},
            {message: "I'm not your slave!", id: "1"}
        ]
    },
    messagesPage: {
        dialogs: [
            {name: "Saha", id: "1",
                chats: [
                    {message: "Zdarova", id: "1"},
                    {message: "Jaba", id: "2"},
                    {message: "Go v dotu", id: "3"}
                ]},
            {name: "Dima", id: "2",
                chats: [
                    {message: "Zdarova", id: "1"},
                    {message: "Jaba", id: "2"},
                    {message: "Go v dotu", id: "3"}
                ]},
            {name: "Kovalsky", id: "3",
                chats: [
                    {message: "Zdarova", id: "1"},
                    {message: "Jaba", id: "2"},
                    {message: "Go v dotu", id: "3"}
                ]},
            {name: "Dusya", id: "4",
                chats: [
                    {message: "Zdarova", id: "1"},
                    {message: "Jaba", id: "2"},
                    {message: "Go v dotu", id: "3"}
                ]},
            {name: "Anton", id: "5",
                chats: [
                    {message: "Zdarova", id: "1"},
                    {message: "Jaba", id: "2"},
                    {message: "Go v dotu", id: "3"}
                ]},
            {name: "Nick", id: "6",
                chats: [
                    {message: "Zdarova", id: "1"},
                    {message: "Jaba", id: "2"},
                    {message: "Go v dotu", id: "3"}
                ]}
        ]
    }
};

export let addPost = (newMessage) => {
    let newPost = {
        message: newMessage,
        id: 4
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;