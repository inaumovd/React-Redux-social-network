import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUsersProfile,
  getUserStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const myUserId = 8092;

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = myUserId;
    }
    this.props.getUserStatus(userId);
    this.props.getUsersProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, { getUsersProfile, getUserStatus, updateStatus }),
  withRouter
)(ProfileContainer);
