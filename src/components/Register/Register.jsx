import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <form className="auth-form">
      <p className="auth-form__welcome">Добро пожаловать!</p>

      <input
        className="auth-form__input form__input_user_email"
        id="user-email-input"
        name="email"
        type="email"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      {/* <span
        className={`form__input-error auth-form__input-error ${
          isValid ? '' : 'form__input-error_active'
        }`}
      >
        {errors.email}
      </span> */}

      <input
        className="auth-form__input form__input_user_email"
        id="user-email-input"
        name="email"
        type="email"
        placeholder="Email"
        minLength="2"
        maxLength="40"
        required
      />
      {/* <span
        className={`form__input-error auth-form__input-error ${
          isValid ? '' : 'form__input-error_active'
        }`}
      >
        {errors.email}
      </span> */}
      <input
        className="auth-form__input form__input_user_password"
        id="user-password-input"
        name="password"
        type="password"
        placeholder="Пароль"
        minLength="6"
        maxLength="200"
        required
      />
      {/* <span
        className={`form__input-error auth-form__input-error ${
          isValid ? '' : 'form__input-error_active'
        }`}
      >
        {errors.password}
      </span> */}
      <button type="submit" className="auth-form__submit-button">
        Зарегистрироваться
      </button>

      <div className="auth-form__text">
        <span>Уже зарегистрированы? </span>
        <Link to="/signin" className="auth-form__link">
          Войти
        </Link>
      </div>
    </form>
  );
};

export default Register;
