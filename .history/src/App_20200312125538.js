import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className="logo-img" alt="logo" src="https://atribootica.ru/upload/1500_1500/98/40/9840be856ae22dcfdf5d787dd271a857.png"/>
      </header>
      <nav className>
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
      </nav>
      <div>
        Main content
      </div>
    </div>
  );
}

export default App;
