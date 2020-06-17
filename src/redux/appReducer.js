import {getUserLoginData} from "./authReducer";

const INITIALIZE_APP = "INITIALIZE-APP";

let initialState = {
    initialized: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {...state, initialized: true};
        default:
            return state;
    }
};

export const initializeAppSuccess = () => ({type: INITIALIZE_APP});

export const initializeApp = () => (dispatch) => {
    dispatch(getUserLoginData())
        .then(() => {
            dispatch(initializeAppSuccess())
        })
};

export default authReducer;