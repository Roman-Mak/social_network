import {usersAPI} from "../../api/api";
import {updateObjInArray} from "../../utils/objectsHelper";

const FOLLOW = "socialNetwork/usersReducer/FOLLOWED";
const UNFOLLOW = "socialNetwork/usersReducer/UNFOLLOWED";
const SET_USERS = "socialNetwork/usersReducer/SET-USERS";
const SET_TOTAL_USERS_COUNT = "socialNetwork/usersReducer/SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "socialNetwork/usersReducer/SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "socialNetwork/usersReducer/TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROCESS = "socialNetwork/usersReducer/TOGGLE-FOLLOWING-IN-PROCESS";

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
                ...state, users: updateObjInArray(state.users, "id", action.userId, {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state, users: updateObjInArray(state.users, "id", action.userId, {followed: false})
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
export const toggleFollowingInProcess = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROCESS,
    isFetching,
    userId
});

export const requestUsers = (currentPage, pageSize, isFriend) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize, isFriend);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))
};

const followUnfollowFlow = async (dispatch, apiMethod, userId, actionCreator) => {
    dispatch(toggleFollowingInProcess(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(toggleFollowingInProcess(false, userId));
    }
};
export const followUser = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, usersAPI.followUser, userId, follow);
};
export const unfollowUser = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, usersAPI.unfollowUser, userId, unfollow);
};

export default usersReducer;