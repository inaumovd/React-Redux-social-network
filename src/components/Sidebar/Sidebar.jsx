import React from "react";
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {

    // const friendsList = props.state.map(friend => <Friends name={friend.name}/>);

    return (
        <div>
            <Navigation/>
            {/*{friendsList}*/}
        </div>
    );
}

export default Sidebar;