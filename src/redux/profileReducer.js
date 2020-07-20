import {profileAPI} from "../api/api";

const ADD_POST = "socialNetwork/profileReducer/ADD-POST";
const SET_USER_PROFILE = "socialNetwork/profileReducer/SET-USER-PROFILE";
const UPDATE_STATUS = "socialNetwork/profileReducer/UPDATE-STATUS";
const GET_STATUS = "socialNetwork/profileReducer/GET-STATUS";
const SET_PHOTO = "socialNetwork/profileReducer/SET-PHOTO";

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
        case SET_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const getUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateStatusSuccess = (status) => ({type: UPDATE_STATUS, status});
export const getUserStatusSuccess = (status) => ({type: GET_STATUS, status});
export const setPhotoSuccess = (photos) => ({type: SET_PHOTO, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId);
    dispatch(getUserProfileSuccess(data));
};
export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId);
    dispatch(getUserStatusSuccess(data));
};
export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(updateStatusSuccess(status));
    }
};
export const setPhoto = (image) => async (dispatch) => {
    const res = await profileAPI.setPhoto(image);
    if (res.resultCode === 0) {
        dispatch(setPhotoSuccess(res.data.photos));
    }
};

export default profileReducer;