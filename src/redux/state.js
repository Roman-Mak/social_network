let store = {
    _state: {
        profilePage: {
            posts: [
                {message: "I'm ALIVE!!!", id: "3"},
                {message: "I'm not machine!", id: "2"},
                {message: "I'm not your slave!", id: "1"}
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogs: [
                {
                    name: "Saha", id: "1",
                    chats: [
                        {message: "Maliy", id: "1"},
                        {message: "Che kak?", id: "2"},
                        {message: "Go na ul", id: "3"}
                    ]
                },
                {
                    name: "Dima", id: "2",
                    chats: [
                        {message: "Yo", id: "1"},
                        {message: "Bro", id: "2"},
                        {message: "How are you?", id: "3"}
                    ]
                },
                {
                    name: "Kovalsky", id: "3",
                    chats: [
                        {message: "Zdarova", id: "1"},
                        {message: "Jaba", id: "2"},
                        {message: "Go v dotu", id: "3"}
                    ]
                },
                {
                    name: "Dana", id: "4",
                    chats: [
                        {message: "Privet", id: "1"},
                        {message: "Meow", id: "2"},
                        {message: "Meow", id: "3"}
                    ]
                },
                {
                    name: "Anton", id: "5",
                    chats: [
                        {message: "Olig", id: "1"},
                        {message: "Zdarova", id: "2"},
                        {message: "Vmaz?", id: "3"}
                    ]
                },
                {
                    name: "Nick", id: "6",
                    chats: [
                        {message: "Zdarova", id: "1"},
                        {message: "Olig", id: "2"},
                        {message: "Na fizru go", id: "3"}
                    ]
                }
            ],
            newMessageText: ""
        }
    },

    _callSubscriber() {},

    getState() {
        return this._state;
    },

    addMessage() {
        let newMessage = {message: this._state.messagesPage.newMessageText, id: 4};
        this._state.messagesPage.dialogs[0].chats.push(newMessage);
        this._state.messagesPage.newMessageText = "";
        this._callSubscriber(this._state);
    },

    updateNewMessageText(text) {
        this._state.messagesPage.newMessageText = text;
        this._callSubscriber(this._state);
    },

    addPost() {
        let newPost = {
            message: this._state.profilePage.newPostText,
            id: 4
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        store._callSubscriber = observer;
    }
};

export default store;