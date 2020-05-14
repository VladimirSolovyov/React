import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addMessage, addPost, editMessage, editPost} from "./redux/state";


export  let renderEntireTree = (state) => {
    ReactDOM.render(<App appState={state} addPost={addPost} editPost={editPost} addMessage={addMessage} editMessage={editMessage}/>, document.getElementById('root'));
};