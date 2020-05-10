const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        // {id: 1, followed: false, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
        // {id: 2, followed: true, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
        // {id: 3, followed: false, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
        // {id: 4, followed: true, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
        // {id: 5, followed: false, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
    ],
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
            return {...state, users: [...state.users, ...action.users]};
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

export default usersReducer;