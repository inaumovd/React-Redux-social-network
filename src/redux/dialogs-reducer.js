const dialogsReducer = (state, action) => {
    if (action.type === 'SEND-MESSAGE') {
        debugger
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
        }
    else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            state.newMessageText = action.newText;
        }
    return state;
};

export default dialogsReducer;