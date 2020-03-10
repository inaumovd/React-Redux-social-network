const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state;
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE'
    };
};

export const onMessageTextChangeActionCreator = (text) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newText: text
    };
};

export default dialogsReducer;