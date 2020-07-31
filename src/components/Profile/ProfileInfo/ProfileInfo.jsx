import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={style.profileBackground}>
        <img
          src="https://themified.com/friend-finder/images/covers/1.jpg"
          alt=""
        />
      </div>
      <div>
        <div className={style.avatarWrapper}>
          <img src={props.profile.photos.large} alt="" />
        </div>
      </div>
      <div>
        <ProfileStatus status="Hello" />
      </div>
    </div>
  );
};

export default ProfileInfo;
