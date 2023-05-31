import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Link className="header__route" to="/signup">
        Регистрация
      </Link>

      <Link className="header__route" to="/signin">
        Войти
      </Link>
    </>
  );
};

export default Navigation;
