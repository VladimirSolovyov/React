import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.logoImg}
        alt='logo'
        src='https://atribootica.ru/upload/1500_1500/98/40/9840be856ae22dcfdf5d787dd271a857.png'
      />
    </header>
  );
};

export default Header;
