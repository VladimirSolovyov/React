import React from 'react';
import './App.css';

import Header from './Header.js';
import Technologies from './Technologies.js';
import Teoria from './Teoria.js';
import Footer from './Footer.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Teoria />
      <Footer />
    </div>
  );
}

export default App;
