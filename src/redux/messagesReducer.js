import {messagesAPI} from "../api/api";

const DELETE_DIALOG = "socialNetwork/messageReducer/DELETE-DIALOG";
const GET_DIALOGS = "socialNetwork/messageReducer/GET-DIALOGS";
const PUT_UP_DIALOG = "socialNetwork/messageReducer/PUT-UP-DIALOG";
const SET_CURRENT_DIALOG = "socialNetwork/messageReducer/SET-CURRENT-DIALOG";
const GET_MESSAGES = "socialNetwork/messageReducer/GET-MESSAGES";
const SEND_MESSAGE = "socialNetwork/messageReducer/SEND-MESSAGE";
const DIALOGS_IS_FETCHING = "socialNetwork/messageReducer/DIALOGS-IS-FETCHING";
const MESSAGES_IS_FETCHING = "socialNetwork/messageReducer/MESSAGES-IS-FETCHING";

let initialState = {
    dialogs: [],
    messages: [],
    selectedDialogId: null,
    dialogsIsFetching: false,
    messagesIsFetching: false
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIALOGS:
            return {...state, dialogs: action.dialogs};
        case GET_MESSAGES:
            return {...state, messages: action.messages};
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, action.message]};
        case PUT_UP_DIALOG:
            return {
                ...state, dialogs: [state.dialogs.find(d => d.id === action.userId),
                    ...state.dialogs.filter(d => d.id !== action.userId)]
            };
        case SET_CURRENT_DIALOG:
            return {...state, selectedDialogId: action.userId};
        case DELETE_DIALOG:
            return {...state, dialogs: state.dialogs.filter(d => d.id !== action.dialogId)};
        case DIALOGS_IS_FETCHING:
            return {...state, dialogsIsFetching: action.isFetching};
        case MESSAGES_IS_FETCHING:
            return {...state, messagesIsFetching: action.isFetching};
        default:
            return state;
    }
};

export const deleteDialog = (dialogId) => ({type: DELETE_DIALOG, dialogId});
const getDialogsSuccess = (dialogs) => ({type: GET_DIALOGS, dialogs});
const putUpDialog = (userId) => ({type: PUT_UP_DIALOG, userId});
export const setCurrentDialog = (userId) => ({type: SET_CURRENT_DIALOG, userId});
const getMessagesSuccess = (messages) => ({type: GET_MESSAGES, messages});
const sendMessageSuccess = (message) => ({type: SEND_MESSAGE, message});
const dialogsIsFetching = (isFetching) => ({type: DIALOGS_IS_FETCHING, isFetching});
const messagesIsFetching = (isFetching) => ({type: MESSAGES_IS_FETCHING, isFetching});

export const getDialogs = () => async (dispatch) => {
    dispatch(dialogsIsFetching(true));
    try {
        let dialogs = await messagesAPI.getDialogs();
        dispatch(getDialogsSuccess(dialogs));
        dispatch(dialogsIsFetching(false));
    } catch (e) {
        dispatch(dialogsIsFetching(false));
    }
};
export const startDialog = (userId) => async (dispatch, getState) => {
    await messagesAPI.startDialog(userId);
    let dialog = getState().messagesPage.dialogs.find(d => d.id === userId);
    if (dialog) {
        dispatch(putUpDialog(userId));
    } else {
        dispatch(getDialogs());
    }
};

export const getMessages = (userId) => async (dispatch) => {
    dispatch(messagesIsFetching(true));
    try {
        let result = await messagesAPI.getMessages(userId);
        dispatch(getMessagesSuccess(result.items));
        dispatch(messagesIsFetching(false));
    } catch (e) {
        dispatch(messagesIsFetching(false));
    }
};

export const initDialogs = (userId) => async (dispatch) => {
    if (userId) {
        dispatch(getMessages(userId));
        dispatch(setCurrentDialog(userId));
        await dispatch(startDialog(userId));
        dispatch(getDialogs());
    } else {
        dispatch(getDialogs());
    }
};

export const updateDialog = (userId) => (dispatch) => {
    if (userId) {
        dispatch(getMessages(userId));
        dispatch(setCurrentDialog(userId));
    } else {
        dispatch(setCurrentDialog(null))
    }
};

export const sendMessage = (userId, body) => async (dispatch) => {
    let result = await messagesAPI.sendMessage(userId, body);
    dispatch(sendMessageSuccess(result.data.message));
    dispatch(putUpDialog(userId));
};

export default messagesReducer;