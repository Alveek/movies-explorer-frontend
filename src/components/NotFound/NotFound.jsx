import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-page__container">
        <p className="not-found-page__title">404</p>
        <p className="not-found-page__text">Страница не найдена</p>
        <Link className="not-found-page__back-btn" to="/">
          Назад
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
