import { usersApi } from "../api/api";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "It's my first post!" },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: 5,
        message: state.newPostText,
      };

      //делаем копию массива
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    case "UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.newText,
      };

    case "SET_USER_PROFILE":
      return {
        ...state,
        profile: action.profile,
      };

    case "SET_STATUS":
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const onPostChangeActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: text,
  };
};

export const setStatus = (status) => {
  return {
    type: "SET_STATUS",
    status: status,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: "SET_USER_PROFILE",
    profile,
  };
};

export const getUsersProfile = (userId) => {
  return (dispatch) => {
    usersApi.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    usersApi.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    usersApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
