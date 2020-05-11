import React from "react";
import style from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className={style.usersContainer}>
                {
                    this.props.users.map(user =>
                        <div className={style.userContainer} key={user.id}>
                            <div className={style.userHeader}>
                                <div className={style.userBg}>
                                    <img src="http://mythemestore.com/friend-finder/images/covers/6.jpg" alt=""/>
                                </div>
                                <div className={style.userPhoto}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <span>{user.fullName}</span>
                                    {/*<span>{user.location.city}</span>*/}
                                    <span>{user.status}</span>
                                </div>

                                <div>
                                    {user.followed
                                        ? <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button>
                                        : <button onClick={() => {this.props.follow(user.id)}}>Follow</button>}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;