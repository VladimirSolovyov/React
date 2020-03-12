import React from 'react';
import './App.css';
import Technologies from './Technologies.js';
import Header from './Header.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Teoria />
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
