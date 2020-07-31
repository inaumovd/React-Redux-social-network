import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsersProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsersProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getUsersProfile }),
  withRouter
)(ProfileContainer);
