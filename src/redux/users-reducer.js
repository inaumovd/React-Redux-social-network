const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_FOLLOWING_PROGRESS = 'SET_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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

        case SET_IS_FOLLOWING_PROGRESS: {
            return {...state,
                    followingInProgress: action.isFetching
                        //если фетчинг то кидаем в массив
                        ? [...state.followingInProgress, action.userId]

                        //если не фетчикг то убираем из массива
                        : state.followingInProgress.filter(id => id != action.userId)
            };
        }


        default:
            return state;
    }
};

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    };
};

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    };
};

export const setTotalCount = (count) => {
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

export const isFollowingProgress = (isFetching, userId) => {
    return {
        type: SET_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    };
};

export default usersReducer;