import React from "react";
import style from "./Users.module.css";
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return <div className={style.usersContainer}>
        <div>

            {pages.map(page => {
                return <span onClick={() => {
                    props.onPageChanged(page)}}
                             className={props.currentPage === page && style.selectedPage}>{page}</span>
            })}

        </div>
        {
            props.users.map(user =>
                <div className={style.userContainer} key={user.id}>
                    <div className={style.userHeader}>
                        <div className={style.userBg}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src="http://mythemestore.com/friend-finder/images/covers/6.jpg" alt=""/>
                            </NavLink>
                        </div>
                        <div className={style.userPhoto}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                        </div>
                    </div>

                    <div>
                        <div>
                            name
                            <span>{user.name}</span>
                            {/*<span>{user.location.city}</span>*/}
                            <span>{user.status}</span>
                        </div>

                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                </div>
            )
        }
    </div>
};

export default Users;