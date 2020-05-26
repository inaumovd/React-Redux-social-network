import React from "react";
import style from "./Dialogs.module.css";
import {onMessageTextChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageTextChange: (text) => {
            dispatch(onMessageTextChangeActionCreator(text));
        },
        onButtonSendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
