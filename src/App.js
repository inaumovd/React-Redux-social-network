import React, { useEffect } from "react";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializedApp } from "./redux/auth-reducer";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

const App = (props) => {
  const dispatch = useDispatch();

  const initialized = useSelector((state) => state.auth.initialized);

  useEffect(() => {
    dispatch(initializedApp());
  }, []);

  if (!initialized) {
    return <Preloader></Preloader>;
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      {/*<Sidebar />*/}
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;
