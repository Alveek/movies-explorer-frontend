import React from 'react';
import './Header.css';
import Navagation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link className="header__route" to="/">
        <img src={Logo} alt="logo" />
      </Link>

      <Navagation />
    </header>
  );
};

export default Header;
