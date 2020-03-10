import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
};

export default store;
