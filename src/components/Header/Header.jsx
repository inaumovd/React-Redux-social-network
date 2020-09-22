import React from "react";
import style from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { logOut } from "../../redux/auth-reducer";

const Header = (props) => {
  const dispatch = useDispatch();
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <a href="google.com" className={style.logoWrapper}>
          <img
            className={style.logo}
            src="https://cdn4.iconfinder.com/data/icons/aami-flat-disaster/64/disasters-09-512.png"
            alt=""
          />
          <span className={style.slogan}>Friends Finder</span>
        </a>
        <nav className={style.navigation}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <NavLink className={style.link} to="/profile">
                Home
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink className={style.link} to="/dialogs">
                Message
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink className={style.link} to="/users">
                Users
              </NavLink>
            </li>
            {/*<li className={style.navItem}>*/}
            {/*    <a className={style.link} href="">News</a>*/}
            {/*</li>*/}
            {/*<li className={style.navItem}>*/}
            {/*    <a className={style.link} href="">Music</a>*/}
            {/*</li>*/}
            {/*<li className={style.navItem}>*/}
            {/*    <a className={style.link} href="">Settings</a>*/}
            {/*</li>*/}
          </ul>
        </nav>
        <div>
          {props.isAuth ? (
            <div>
              <span>{props.login}</span>
              <button
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                Log out
              </button>
            </div>
          ) : (
            <NavLink className={style.link} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
