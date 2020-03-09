import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
};

renderEntireTree(store.getState());

store.suscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. N  ote this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();