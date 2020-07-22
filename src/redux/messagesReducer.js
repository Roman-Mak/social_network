import {messagesAPI} from "../api/api";

const ADD_MESSAGE = "socialNetwork/messageReducer/ADD-MESSAGE";
const DELETE_DIALOG = "socialNetwork/messageReducer/DELETE-DIALOG";
const GET_DIALOGS = "socialNetwork/messageReducer/GET-DIALOGS";
const PUT_UP_DIALOG = "socialNetwork/messageReducer/PUT-UP-DIALOG";
const SET_CURRENT_DIALOG = "socialNetwork/messageReducer/SET-CURRENT-DIALOG";
const GET_MESSAGES = "socialNetwork/messageReducer/GET-MESSAGES";

let initialState = {
    dialogs: [],
    messages: [],
    selectedDialogId: null,
    messageText: ""
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIALOGS:
            return {...state, dialogs: action.dialogs};
        case ADD_MESSAGE:
            // let newMessage = {message: action.newMessageText, id: "4"};
            // let stateCopy = {...state};
            // stateCopy.dialogs[0].chats = [...state.dialogs[0].chats, newMessage];
            // return stateCopy;
            return {...state, messageText: action.newMessageText};
        case PUT_UP_DIALOG:
            return {...state, dialogs: [state.dialogs.find(d => d.id === action.userId),
                    ...state.dialogs.filter(d => d.id !== action.userId)]};
        case SET_CURRENT_DIALOG:
            return {...state, selectedDialogId: action.userId};
        case DELETE_DIALOG:
            return {...state, dialogs: state.dialogs.filter(d => d.id !== action.dialogId)};
        default: return state;
    }
};

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});
export const deleteDialog = (dialogId) => ({type: DELETE_DIALOG, dialogId});
const getDialogsSuccess = (dialogs) => ({type: GET_DIALOGS, dialogs});
const putUpDialog = (userId) => ({type: PUT_UP_DIALOG, userId});
export const setCurrentDialog = (userId) => ({type: SET_CURRENT_DIALOG, userId});
const getMessagesSuccess = (userId) => ({type: GET_MESSAGES, userId});

export const getDialogs = () => async (dispatch) => {
    try {
        let dialogs = await messagesAPI.getDialogs();
        dispatch(getDialogsSuccess(dialogs));
    }
    catch (e) {

    }
};
export const startDialog = (userId) => async (dispatch, getState) => {
    await messagesAPI.startDialog(userId);
    let dialog = getState().messagesPage.dialogs.find(d => d.id === userId);
    if (dialog) {
        dispatch(putUpDialog(userId));
    } else dispatch(getDialogs());
};

export const getMessages = (userId) => async (dispatch) => {
    try {
        let res = await messagesAPI.getMessages(userId);
        dispatch(getMessagesSuccess(res.items));
    }
    catch (e) {

    }
};

export default messagesReducer;