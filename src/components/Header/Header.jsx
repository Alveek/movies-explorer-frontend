import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import useResize from '../../hooks/useResize.js';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const size = useResize();
  return (
    <header className="header">
      <Link className="header__route" to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>

      {size.width > 768 ? (
        <Navigation />
      ) : isLoggedIn ? (
        <Drawer />
      ) : (
        <Navigation />
      )}
    </header>
  );
};

export default Header;
