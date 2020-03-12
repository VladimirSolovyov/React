import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Teoria />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <nav className="Header-menu">
        <a href="#s">Home</a>
        <a href="#s">About</a>
        <a href="#s">Contact</a>
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
      <div>
        <p>Компонента - это функция, возвращающая разметку (JSX)</p>
        
      </div>
  );
}

export default App;
