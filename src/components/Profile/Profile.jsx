import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const Profile = ({ onSignOut, onUpdateUser }) => {
  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormAndValidation();
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsValid(true);
    }
  }, [currentUser, setIsValid, setValues]);

  return (
    <section className="profile">
      <h1 className="profile__welcome-message">Привет, {currentUser.name}!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onUpdateUser(values);
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
            value={values.name || ''}
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
            value={values.email || ''}
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
          onClick={onSignOut}
          className="profile-form__button profile-form__button-signout"
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};

export default Profile;
