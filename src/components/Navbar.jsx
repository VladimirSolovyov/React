import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className='item'>
        <a href="%s"> Profile </a>
      </div>
      <div className='item'>
        <a href="%s"> Message </a>
      </div>
      <div className='item'>
        <a href="%s"> News </a>
      </div>
      <div className='item'>
        <a href="%s"> Music </a>
      </div>
      <div className='item'>
        <a href="%s"> Settings </a>
      </div>
    </nav>
  );
};

export default Navbar;
