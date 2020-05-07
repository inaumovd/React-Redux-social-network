let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimich1'},
        {id: 2, name: 'Dimich2'},
        {id: 3, name: 'Dimich3'},
        {id: 4, name: 'Dimich4'},
        {id: 5, name: 'Dimich5'},
    ],
    messagesData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Call me plz!'},
        {id: 3, message: 'Go ahead!'},
    ],

    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: '',
            };
        }
        case 'UPDATE-MESSAGE-TEXT': {
            return {
                ...state,
                newMessageText: action.newText
            };
        }
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