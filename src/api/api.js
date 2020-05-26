import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

const instance = axios.create({
    withCredentials: true,
    // baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "5f2f10d6-d4fa-4fe7-b637-2226493c5051"
    }
});

export const usersApi = {
    getUsers (currentPage, pageSize) {
        return instance.get(`${baseUrl}/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    deleteUser (userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    postUser (userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    getProfile (userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                return response.data;
            });
    }
};

export const authAPI = {
    me() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
    }
};

