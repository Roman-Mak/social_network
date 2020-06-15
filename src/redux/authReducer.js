import {authAPI} from "../api/api";

const SET_USER_LOGIN_DATA = "SET-USER-LOGIN-DATA";
const TOGGLE_IS_AUTH = "TOGGLE-IS-AUTH";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN_DATA:
            return {...state, ...action.payload};
        case TOGGLE_IS_AUTH :
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    }
};

export const setUserLoginData = (userId, email, login) => ({type: SET_USER_LOGIN_DATA, payload: {userId, email, login}});
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth});

export const getUserLoginData = () => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                if (data.messages[0] !== "You are not authorized") {
                    let {id, email, login} = data.data;
                    dispatch(setUserLoginData(id, email, login));
                    dispatch(toggleIsAuth(true));
                }
            }
        });
};
export const userLogin = (email, password, rememberMe) => (dispatch) => {
    authAPI.authLogin(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                    dispatch(getUserLoginData());
            }
        });
};
export const userLogout = () => (dispatch) => {
    authAPI.authLogout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserLoginData(null, null, null));
                dispatch(toggleIsAuth(false));
            }
        });
};

export default authReducer;