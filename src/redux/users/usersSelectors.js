import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
};
// export const getUsersWithAvatar = createSelector(getUsers, (users) => {
//     return users.filter(user => user.photos.small)
// });
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProcess = (state) => {
    return state.usersPage.followingInProcess;
};
