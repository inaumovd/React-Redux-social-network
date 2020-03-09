import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/256px-Microsoft_Edge_logo_%282019%29.svg.png" alt=""/>
        </header>
    );
}

export default Header;