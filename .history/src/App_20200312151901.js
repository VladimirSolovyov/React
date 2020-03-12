import React from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <
      <div className="content">
        <div>
          <img alt="content-img" src="https://www.betting-previews.com/wp-content/uploads/2017/02/zenit_saint_petersburg-wide.jpg" />
        </div>
        <div>
          <img src="https://www.macitynet.it/forum/uploads/profile/photo-21332.gif" alt="avatar" />
        </div>
        <div>
          My post
          <div>
            New post.
          </div>
          <div>
            Post1
          </div>
          <div>
            Post2 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
