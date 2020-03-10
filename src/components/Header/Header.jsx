import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <a href='#' className={style.logoWrapper}>
                    <img className={style.logo} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/256px-Microsoft_Edge_logo_%282019%29.svg.png" alt=""/>
                    <span className={style.slogan}>Friends Finder</span>
                </a>
                <nav className={style.navigation}>
                    <ul className={style.navList}>
                        <li className={style.navItem}>
                            <a className={style.link} href="">Home</a>
                        </li>
                        <li className={style.navItem}>
                            <a className={style.link} href="">Message</a>
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