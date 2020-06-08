import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const UPDATE_STATUS = "UPDATE-STATUS";
const GET_STATUS = "GET-STATUS";

let initialState = {
    posts: [
        {message: "I'm ALIVE!!!", id: "3"},
        {message: "I'm not machine!", id: "2"},
        {message: "I'm not your slave!", id: "1"}
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.newPostText,
                id: 4
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case GET_STATUS:
            return {...state, status: action.status};
        case UPDATE_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateStatusAC = (status) => ({type: UPDATE_STATUS, status});
export const getUserStatusAC = (status) => ({type: GET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        });
};

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(data => {
            dispatch(getUserStatusAC(data.data))
        });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(updateStatusAC(status))
            }
        })
};

export default profileReducer;