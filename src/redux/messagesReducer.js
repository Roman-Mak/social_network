const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogs: [
        {
            name: "Saha",
            id: "1",
            chats: [
                {message: "Maliy", id: "1"},
                {message: "Che kak?", id: "2"},
                {message: "Go na ul", id: "3"}
            ]
        },
        {
            name: "Dima",
            id: "2",
            chats: [
                {message: "Yo", id: "1"},
                {message: "Bro", id: "2"},
                {message: "How are you?", id: "3"}
            ]
        },
        {
            name: "Kovalsky",
            id: "3",
            chats: [
                {message: "Zdarova", id: "1"},
                {message: "Jaba", id: "2"},
                {message: "Go v dotu", id: "3"}
            ]
        },
        {
            name: "Dana",
            id: "4",
            chats: [
                {message: "Privet", id: "1"},
                {message: "Meow", id: "2"},
                {message: "Meow", id: "3"}
            ]
        },
        {
            name: "Anton",
            id: "5",
            chats: [
                {message: "Olig", id: "1"},
                {message: "Zdarova", id: "2"},
                {message: "Vmaz?", id: "3"}
            ]
        },
        {
            name: "Nick",
            id: "6",
            chats: [
                {message: "Zdarova", id: "1"},
                {message: "Olig", id: "2"},
                {message: "Na fizru go", id: "3"}
            ]
        }
    ],
    messageText: ""
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            // let newMessage = {message: action.newMessageText, id: "4"};
            // let stateCopy = {...state};
            // stateCopy.dialogs[0].chats = [...state.dialogs[0].chats, newMessage];
            // return stateCopy;
            return {...state, messageText: action.newMessageText};
        default: return state;
    }
};

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default messagesReducer;