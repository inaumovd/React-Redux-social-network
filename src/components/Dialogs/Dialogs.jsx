import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onMessageTextChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messageElements = props.messages.map(message => <Message key={message.id} message={message.message} id={message.id}/>)

    let newMessageElement = React.createRef();

    let onButtonSendMessage = () => {
        props.onButtonSendMessage();
    };

    let onMessageTextChange = () => {
      let text = newMessageElement.current.value;
      props.onMessageTextChange(text);
    };

    return (
    <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={style.messages}>
            {messageElements}
        </div>
        <div className={style.dialogsTextContainer}>
            <textarea className={style.textarea}
                      onChange={onMessageTextChange}
                      ref={newMessageElement} name="" id="" cols="30" rows="10" value={props.newMessageText}></textarea>
            <button className={style.sendButton}
                    onClick={onButtonSendMessage}>Send message</button>
        </div>
    </div>
  );
};


export default Dialogs;
