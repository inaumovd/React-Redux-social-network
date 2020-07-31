import React, { useState } from "react";

const ProfileStatus = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const onStatusClick = () => {
    setIsEditMode(true);
  };

  const onInputBlur = () => {
    setIsEditMode(false);
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
            value={props.status}
            type="text"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileStatus;
