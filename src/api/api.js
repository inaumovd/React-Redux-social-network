import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "b0190c8f-942e-42ff-b3f2-317260b641ba",
  },
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  deleteUser(userId) {
    return instance.delete(`/follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  postUser(userId) {
    return instance.post(`/follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  getProfile(userId) {
    return instance.get(`/profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },

  updateStatus(status) {
    return instance.put(`/profile/status`, { status }).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`/auth/me`);
  },
};
