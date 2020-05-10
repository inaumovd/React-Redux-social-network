import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <a href='#' className={style.logoWrapper}>
                    <img className={style.logo} src="https://cdn4.iconfinder.com/data/icons/aami-flat-disaster/64/disasters-09-512.png" alt=""/>
                    <span className={style.slogan}>Friends Finder</span>
                </a>
                <nav className={style.navigation}>
                    <ul className={style.navList}>
                        <li className={style.navItem}>
                            <NavLink className={style.link} to="/profile">Home</NavLink>
                        </li>
                        <li className={style.navItem}>
                            <NavLink className={style.link} to="/dialogs">Message</NavLink>
                        </li>
                        <li className={style.navItem}>
                            <NavLink className={style.link} to="/users">Users</NavLink>
                        </li>
                        <li className={style.navItem}>
                            <a className={style.link} href="">News</a>
                        </li>
                        <li className={style.navItem}>
                            <a className={style.link} href="">Music</a>
                        </li>
                        <li className={style.navItem}>
                            <a className={style.link} href="">Settings</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;