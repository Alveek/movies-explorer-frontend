import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <Link className="nav__route" to="/signup">
        Регистрация
      </Link>

      <Link className="nav__route nav__route-btn" to="/signin">
        Войти
      </Link>
    </nav>
  );
};

export default Navigation;
