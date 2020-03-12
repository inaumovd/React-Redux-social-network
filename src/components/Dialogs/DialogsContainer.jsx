import React from "react";
import style from "./Dialogs.module.css";
import {onMessageTextChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let onButtonSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let onMessageTextChange = (text) => {
        props.store.dispatch(onMessageTextChangeActionCreator(text));
    };

    return (
        <Dialogs onMessageTextChange={onMessageTextChange}
                 onButtonSendMessage={onButtonSendMessage}
                 dialogs={state.dialogsData}
                 messages={state.messagesData}
                 newMessageText={state.newMessageText}
        />
    );
};


export default DialogsContainer;
