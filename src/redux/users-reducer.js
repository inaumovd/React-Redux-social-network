const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {

            //делаем копию массива
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        }

        case UNFOLLOW: {

            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        }

        case SET_USERS: {
            return {...state, users: [...action.users]};
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page};
        }

        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count};
        }

        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }


        default:
            return state;
    }
};

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    };
};

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    };
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    };
};

export const setCurrentPageAC = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    };
};

export const setTotalCountAC = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        count
    };
};

export const setIsFetching = (isFetching) => {
    return {
        type: SET_IS_FETCHING,
        isFetching
    };
};

export default usersReducer;