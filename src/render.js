import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addPost} from "./redux/state";
import {editPost} from "./redux/state";


export  let renderEntireTree = (state) => {
    ReactDOM.render(<App appState={state} addPost={addPost} editPost={editPost}/>, document.getElementById('root'));
};