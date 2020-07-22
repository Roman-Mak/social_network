import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "b29a2be9-93e2-498c-9365-70a515100fee"}
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
        return instance.get(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status}).then(res => res.data)
    },
    setPhoto(image) {
        const formData = new FormData();
        formData.append("image", image);
        return instance.put(`profile/photo`, formData, {
            headers: {"Content-Type": "multipart/form-data"}
        }).then(res => res.data)
    }
};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(res => res.data);
    },
    authLogin(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(res => res.data);
    },
    authLogout() {
        return instance.delete(`auth/login`).then(res => res.data);
    }
};

export const messagesAPI = {
    getDialogs() {
        return instance.get(`dialogs`).then(res => res.data);
    },
    getDialog(userId) {
        return instance.get(`dialogs/${userId}`).then(res => res.data);
    },
    startDialog(userId) {
        return instance.put(`dialogs/${userId}`).then(res => res.data);
    },
    getMessages(userId) {
        return instance.get(`dialogs/${userId}/messages`).then(res => res.data);
    },
    sendMessage(userId) {
        return instance.post(`dialogs/${userId}/messages`).then(res => res.data);
    },
    getMessageViewed(messageId) {
        return instance.get(`dialogs/messages/${messageId}/viewed`).then(res => res.data);
    },
    spam(messageId) {
        return instance.post(`dialogs/messages/${messageId}/spam`).then(res => res.data);
    },
    deleteMessage(messageId) {
        return instance.delete(`dialogs/messages/${messageId}`).then(res => res.data);
    },
    restoreMessage(messageId) {
        return instance.put(`dialogs/messages/${messageId}`).then(res => res.data);
    },
    getNewMessagesCount() {
        return instance.get(`dialogs/messages/new/count`).then(res => res.data);
    }
};