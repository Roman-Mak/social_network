import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "cd6b66cc-d0ef-4fb7-9f54-808df7c15bee"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {}).then(res => res.data);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(res => res.data);
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(res => res.data);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    }
};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(res => res.data);
    }
};