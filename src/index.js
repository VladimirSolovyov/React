import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id:1,message:'Hi, how are you?',countLike:10},
    {id:2,message:'It\'s my first post',countLike:18},
];

let dialogs = [
    {id:1,name:'Mother'},
    {id:2,name:'Father'},
    {id:3,name:'Wife'},
    {id:4,name:'Brother'},
    {id:5,name:'Sister'},
    {id:6,name:'Son'},
];

let messages =[
    {id:1,message:'Hi, Son!'},
    {id:1,message:'How a you?'},
    {id:1,message:'Goodbye, son :)'},
];

ReactDOM.render(<App postData={postData} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
