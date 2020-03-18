import React from "react";
import style from "./Dialogs.module.css";
import {onMessageTextChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Posts from "../Profile/Posts/Posts";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
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



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default DialogsContainer;
