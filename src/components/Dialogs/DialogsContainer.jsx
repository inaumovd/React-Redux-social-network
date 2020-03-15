import React from "react";
import style from "./Dialogs.module.css";
import {onMessageTextChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let onButtonSendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                };

                let onMessageTextChange = (text) => {
                    store.dispatch(onMessageTextChangeActionCreator(text));
                };

                return <Dialogs onMessageTextChange={onMessageTextChange}
                                 onButtonSendMessage={onButtonSendMessage}
                                 dialogs={state.messagesPage.dialogsData}
                                 messages={state.messagesPage.messagesData}
                                 newMessageText={state.messagesPage.newMessageText}/>
            }
        }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
