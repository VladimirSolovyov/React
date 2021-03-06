import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.appState.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={
                        ()=> <Profile profilePage={props.appState.profilePage} addPost={props.addPost} editPost={props.editPost}/>
                    }/>
                    <Route path='/dialogs' render={()=><Dialogs state={props.appState.dialogsPage} addMessage={props.addMessage} editMessage={props.editMessage}/>} />
                    <Route path='/news' render={()=><News />} />
                    <Route path='/music' render={()=><Music/>} />
                    <Route path='/settings' render={()=><Settings/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
