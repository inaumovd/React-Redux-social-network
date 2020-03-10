const profileReducer = (state, action) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            message: state.newPostText
        };
        state.postsData.push(newPost);
        state.newPostText = '';
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;
    }
    return state;
};

export default profileReducer;