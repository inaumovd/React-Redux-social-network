let store = {
    _state: {
        messagesPage: {
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
        },

        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?'},
                {id: 2, message: 'It\'s my first post!'},
            ],
            newPostText: ''
        },

        friends: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Stepa'}
        ]
    },
    getState() {
      return this._state;
    },
    suscribe (observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber () {
        console.log('state changed');
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({ type: 'ADD-POST'});

export const onPostChangeActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    };
};

export default store;
