import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings"
import {Route} from "react-router-dom";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Sidebar state={props.state.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
