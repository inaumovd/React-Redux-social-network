import React from "react";
import style from "./Dialogs.module.css";
import { useForm } from "react-hook-form";
import Redirect from "react-router-dom/es/Redirect";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const AddMessageForm = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className={style.textarea}
        name=""
        id=""
        cols="30"
        rows="10"
        value={props.newMessageText}
        ref={register}
      ></textarea>
      <button type="submit" className={style.sendButton}>
        Send message
      </button>
    </form>
  );
};

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));
  let messageElements = props.messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messageElements}</div>
      <div className={style.dialogsTextContainer}>
        <AddMessageForm props={props} />
      </div>
    </div>
  );
};

export default Dialogs;
