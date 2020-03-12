import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
        
      <div>
        <p>Компонента - это функция, возвращающая разметку (JSX)</p>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <nav className="Header-menu">
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
    </div>
  );
}

export default App;