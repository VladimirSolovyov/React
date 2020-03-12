import React from 'react';
import './App.css';
import Technologies from './Technologies';
import Header from 'Header';

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
