import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <p>404</p>
      <p>Страница не найдена</p>
      <Link to="/">Назад</Link>
    </>
  );
};

export default NotFound;
