import {usersAPI} from "../../api/api";

const FOLLOW = "FOLLOWED";
const UNFOLLOW = "UNFOLLOWED";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROCESS = "TOGGLE-FOLLOWING-IN-PROCESS";

let initialState = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 30,
    isFetching: false,
    followingInProcess: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    } else return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    } else return user;
                })
            };
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_FOLLOWING_IN_PROCESS:
            return {
                ...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProcess = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROCESS, isFetching, userId});

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount))
            });
    }
};
export const followUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProcess(true, userId));
    usersAPI.followUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
                dispatch(toggleFollowingInProcess(false, userId));
            }
        });
};
export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProcess(true, userId));
    usersAPI.unfollowUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
                dispatch(toggleFollowingInProcess(false, userId));
            }
        });
};

export default usersReducer;