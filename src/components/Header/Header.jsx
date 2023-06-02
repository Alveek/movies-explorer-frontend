import React from 'react';
import './Header.css';
// import Navigation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <header className="header">
      <Link className="header__route" to="/">
        <img src={Logo} alt="logo" />
      </Link>

      {isLoggedIn ? (
        <>
          <div className="header__movies">
            <Link className="header__route" to="/movies">
              Фильмы
            </Link>

            <Link className="header__route" to="/saved-movies">
              Сохраненные фильмы
            </Link>
          </div>

          <Link className="header__route" to="/signin">
            Аккаунт
          </Link>
        </>
      ) : (
        <div className="nav__default">
          <Link className="header__route" to="/profile">
            Регистрация
          </Link>

          <Link className="header__route header__route-btn" to="/signin">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
