import { compose } from "redux";
import { connect } from "react-redux";

import Dialogs from "./Dialogs";
import {
  onMessageTextChangeActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogsData,
    messages: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageTextChange: (text) => {
      dispatch(onMessageTextChangeActionCreator(text));
    },
    onButtonSendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
