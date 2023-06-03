import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import AccoutIcon from '../../images/icon-account.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  let location = useLocation();

  return (
    <header className="header">
      <Link className="header__route" to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>

      {isLoggedIn ? (
        <>
          <div className="header__movies">
            <Link
              className={`header__movies-route${
                location.pathname === '/movies'
                  ? ' header__movies-route_active'
                  : ''
              }`}
              to="/movies"
            >
              Фильмы
            </Link>

            <Link
              className={`header__movies-route${
                location.pathname === '/saved-movies'
                  ? ' header__movies-route_active'
                  : ''
              }`}
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </div>

          <Link className="header__route header__route-account" to="/profile">
            <img src={AccoutIcon} alt="" /> Аккаунт
          </Link>
        </>
      ) : (
        <div className="nav__default">
          <Link className="header__route" to="/signup">
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
