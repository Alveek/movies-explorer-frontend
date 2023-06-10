import React from 'react';
import './Profile.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const Profile = () => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const onEditProfile = (val) => {
    console.log(val);
  };

  return (
    <section className="profile">
      <h1 className="profile__welcome-message">Привет, Виталий!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onEditProfile(values);
        }}
        className="profile-form"
      >
        <div className="profile-form__input-field">
          <label className="profile-form__label" htmlFor="user-name-input">
            Имя
          </label>
          <input
            className="profile-form__input"
            id="user-name-input"
            name="name"
            // value={values.name || ''}
            value="Виталий"
            onChange={handleChange}
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className={`profile-form__input-error ${
              isValid ? '' : 'profile-form__input-error_active'
            }`}
          >
            {errors.name}
          </span>
        </div>

        <div className="profile-form__input-field">
          <label className="profile-form__label" htmlFor="user-email-input">
            E-mail
          </label>
          <input
            className="profile-form__input"
            id="user-email-input"
            name="email"
            // value={values.email || ''}
            value="pochta@yandex.ru"
            onChange={handleChange}
            type="email"
            placeholder="Введите почту"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className={`profile-form__input-error ${
              isValid ? '' : 'profile-form__input-error_active'
            }`}
          >
            {errors.email}
          </span>
        </div>

        <button
          type="submit"
          className="profile-form__button profile-form__button-edit"
        >
          Редактировать
        </button>
        <button
          type="submit"
          className="profile-form__button profile-form__button-signout"
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};

export default Profile;
