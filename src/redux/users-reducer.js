const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';


let initialState = {
    users: [
        // {id: 1, followed: false, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
        // {id: 2, followed: true, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
        // {id: 3, followed: false, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
        // {id: 4, followed: true, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
        // {id: 5, followed: false, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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

export default usersReducer;