import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const goBack = () => {
    // Почему после авторизации требуется вернуться на 2 страницы назад
    isLoggedIn ? navigate(-2) : navigate(-1);
  };

  return (
    <section className="not-found-page">
      <div className="not-found-page__container">
        <p className="not-found-page__title">404</p>
        <p className="not-found-page__text">Страница не найдена</p>
        <button className="not-found-page__back-btn" onClick={goBack}>
          Назад
        </button>
      </div>
    </section>
  );
};

export default NotFound;
