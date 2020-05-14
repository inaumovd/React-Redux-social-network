import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.profileBackground}>
                <img src="http://mythemestore.com/friend-finder/images/covers/1.jpg" alt=""/>
            </div>
            <div>
                <div className={style.avatarWrapper}>
                    {/*<img src="http://mythemestore.com/friend-finder/images/users/user-1.jpg" alt=""/>*/}
                    <img src={props.profile.photos.large} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;