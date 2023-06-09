import React from 'react';
import './Navigation.css';
import { useLocation, Link } from 'react-router-dom';
import AccoutIcon from '../../images/icon-account.svg';

const Navigation = ({ isLoggedIn }) => {
  let location = useLocation();
  const routeClass = isLoggedIn ? 'nav__route-drawer ' : 'nav__route ';

  return (
    <nav className="nav">
      {isLoggedIn ? (
        <>
          <div className="nav__movies">
            <Link
              className={`${routeClass} nav__route-main${
                location.pathname === '/' ? ' nav__route_active' : ''
              }`}
              to="/"
            >
              Главная
            </Link>
            <Link
              className={`${routeClass} nav__movies-route${
                location.pathname === '/movies' ? ' nav__route_active' : ''
              }`}
              to="/movies"
            >
              Фильмы
            </Link>

            <Link
              className={`${routeClass} nav__movies-route${
                location.pathname === '/saved-movies'
                  ? ' nav__route_active'
                  : ''
              }`}
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </div>

          <Link className={`nav__route nav__route-account`} to="/profile">
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
