import React from 'react';
import Navagation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';
import { Link, Route, Routes } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <Link className="header__route" to="/">
              <img src={Logo} alt="logo" />
            </Link>
          }
        />
      </Routes>

      <Navagation />
    </>
  );
};

export default Header;
