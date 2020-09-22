import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  initialized: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      //делаем копию массива
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }

    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};

export const getAuthUserData = () => {
  return (dispatch) => {
    return authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

export const login = (data) => {
  return (dispatch) => {
    authAPI.login(data).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
  };
};

export const logOut = () => {
  return (dispatch) => {
    authAPI.logOut().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export const initializedApp = () => {
  return (dispatch) => {
    const authResult = dispatch(getAuthUserData());

    Promise.all([authResult]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};
export default authReducer;
