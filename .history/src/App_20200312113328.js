import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <div><Header /></div>
      <div className="App">  
        <ul>
          <li>Css</li>
          <li>Html</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>
      <div>
        <p>Компонента - это функция, возвращающая разметку (JSX)</p>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <nav className>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
    </div>
  );
}

export default App;
