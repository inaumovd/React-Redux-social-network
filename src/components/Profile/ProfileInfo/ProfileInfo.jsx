import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.ecopetit.cat/wpic/mpic/66-665907_relaxing-background.jpg" alt=""/>
            </div>
            <div>
                ava + desc
                <div className={style.avatarWrapper}>
                    <img src="http://mythemestore.com/friend-finder/images/users/user-1.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;