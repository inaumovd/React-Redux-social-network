import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, followed: false, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
            {id: 2, followed: true, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
            {id: 3, followed: false, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
            {id: 4, followed: true, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
            {id: 5, followed: false, userBgUrl: 'http://mythemestore.com/friend-finder/images/covers/5.jpg', userPhotoUrl: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg', fullName: 'Dima', status: 'Im boss', location: {city: 'Irkutsk', country: 'Russia'}},
        ]);
    }
    return (
        <div className={style.usersContainer}>
            {
                props.users.map(user =>
                    <div className={style.userContainer} key={user.id}>
                        <div className={style.userHeader}>
                            <div className={style.userBg}>
                                <img src={user.userBgUrl} alt=""/>
                            </div>
                            <div className={style.userPhoto}>
                                <img src={user.userPhotoUrl} alt=""/>
                            </div>
                        </div>

                        <div>
                            <div>
                                <span>{user.fullName}</span>
                                <span>{user.location.city}</span>
                                <span>{user.status}</span>
                            </div>

                            <div>
                                {user.followed
                                    ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default Users;