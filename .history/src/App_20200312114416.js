import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
      
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

const Technologies = () => {
  return (
        <div>
          <ul>
            <li>Css</li>
            <li>Html</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
  );
}
const Teoria = () => {
  return(
    
  );
}

export default App;
