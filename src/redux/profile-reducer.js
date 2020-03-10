const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
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

export default profileReducer;