import React from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Login.css';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const onLogin = (val) => {
    console.log(val);
  };

  return (
    <section className="login-page">
      <Link className="login-page__route" to="/">
        <img className="login-page__logo" src={Logo} alt="logo" />
      </Link>

      <h1 className="login-page__title">Рады видеть!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(values);
        }}
        className="form"
      >
        <label className="form__label" htmlFor="user-email-input">
          E-mail
        </label>
        <input
          className="form__input"
          id="user-email-input"
          name="email"
          value={values.email || ''}
          // value="pochta@yandex.ru"
          onChange={handleChange}
          type="email"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          className={`form__input-error ${
            isValid ? '' : 'form__input-error_active'
          }`}
        >
          {errors.email}
        </span>

        <label className="form__label" htmlFor="user-password-input">
          Пароль
        </label>
        <input
          className="form__input"
          id="user-password-input"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          type="password"
          minLength="6"
          maxLength="200"
          required
        />
        <span
          className={`form__input-error ${
            isValid ? '' : 'form__input-error_active'
          }`}
        >
          {errors.password}
        </span>
        <button type="submit" className="form__btn">
          Войти
        </button>

        <div className="login-page__text">
          <span>Ещё не зарегистрированы? </span>
          <Link to="/signup" className="login-page__link">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
