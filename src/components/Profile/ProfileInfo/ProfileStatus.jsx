import React, { useState } from "react";
import { setStatus } from "../../../redux/profile-reducer";

const ProfileStatus = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [status, setLocalStatus] = useState(props.status);

  const onStatusClick = () => {
    setIsEditMode(true);
  };

  const onInputBlur = () => {
    setIsEditMode(false);
    props.updateStatus(status);
  };

  return (
    <div>
      <div>
        {!isEditMode ? (
          <span onDoubleClick={onStatusClick}>{props.status}</span>
        ) : (
          <input
            autoFocus={true}
            onBlur={onInputBlur}
            value={status}
            type="text"
            onChange={(e) => {
              setLocalStatus(e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileStatus;
