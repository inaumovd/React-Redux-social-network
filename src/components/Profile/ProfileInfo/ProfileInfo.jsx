import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.profileBackground}>
                <img src="http://mythemestore.com/friend-finder/images/covers/1.jpg" alt=""/>
            </div>
            <div>
                <div className={style.avatarWrapper}>
                    <img src="http://mythemestore.com/friend-finder/images/users/user-1.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;