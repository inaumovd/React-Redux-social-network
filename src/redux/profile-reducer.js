let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'It\'s my first post!'},
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText
            };

            //делаем копию массива
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case 'UPDATE-NEW-POST-TEXT':

            return {
                ...state,
                newPostText: action.newText,
            };

        case 'SET_USER_PROFILE':

            return {
                ...state,
                profile: action.profile,
            };

        default:
            return state;

    }
};

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    };
};

export const onPostChangeActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    };
};

export const setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    };
};

export default profileReducer;