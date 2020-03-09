import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.state.messagesData.map(message => <Message message={message.message} id={message.id}/>)

    let newMessageElement = React.createRef();

    let onButtonSendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'});
    };

    let onMessageTextChange = () => {
      let text = newMessageElement.current.value;
      props.dispatch({type: 'UPDATE-MESSAGE-TEXT', newText: text});
    };

    return (
    <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={style.messages}>
            {messageElements}
        </div>
        <div>
            <textarea onChange={onMessageTextChange} ref={newMessageElement} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={onButtonSendMessage}>Send message</button>
        </div>
    </div>
  );
};


export default Dialogs;
