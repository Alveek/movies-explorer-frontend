import React from 'react';
import './Navigation.css';
import { useLocation, Link } from 'react-router-dom';
import AccoutIcon from '../../images/icon-account.svg';

// import Drawer from '../Drawer/Drawer';

const Navigation = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  let location = useLocation();

  return (
    <nav className="nav">
      {/* <Drawer /> */}

      {isLoggedIn ? (
        <>
          <div className="nav__movies">
            <Link
              className={`nav__route nav__route-main${
                location.pathname === '/' ? ' nav__route_active' : ''
              }`}
              to="/"
            >
              Главная
            </Link>
            <Link
              className={`nav__route nav__movies-route${
                location.pathname === '/movies' ? ' nav__route_active' : ''
              }`}
              to="/movies"
            >
              Фильмы
            </Link>

            <Link
              className={`nav__route nav__movies-route${
                location.pathname === '/saved-movies'
                  ? ' nav__route_active'
                  : ''
              }`}
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </div>

          <Link className="nav__route nav__route-account" to="/profile">
            <img src={AccoutIcon} alt="" /> Аккаунт
          </Link>
        </>
      ) : (
        <div className="nav__default">
          <Link className="nav__route" to="/signup">
            Регистрация
          </Link>

          <Link className="nav__route nav__route-btn" to="/signin">
            Войти
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
