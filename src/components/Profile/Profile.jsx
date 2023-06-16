import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const Profile = ({ onSignOut, onUpdateUser, apiErrors, isOK }) => {
  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormAndValidation();
  const { currentUser } = useContext(CurrentUserContext);
  const [showSaveBtn, setShowSaveBtn] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsValid(true);
    }
  }, [currentUser, setIsValid, setValues]);

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
  };

  useEffect(() => {
    if (isOK) {
      setShowSaveBtn(false);
    }
  }, [isOK, apiErrors]);

  return (
    <section className="profile">
      <h1 className="profile__welcome-message">Привет, {currentUser.name}!</h1>
      <form onSubmit={onSubmit} className="profile-form">
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
            disabled={!showSaveBtn && isOK}
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
            disabled={!showSaveBtn && isOK}
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

        <div className="profile-form__buttons">
          {apiErrors.profile && (
            <span className="profile-form__error-message">
              {apiErrors.profile.errorText === 'Validation failed'
                ? apiErrors.profile.joiMessage
                : apiErrors.profile.errorText}
            </span>
          )}

          {showSaveBtn ? (
            <button
              type="submit"
              className="profile-form__button profile-form__button-save"
              disabled={!isValid}
            >
              Сохранить
            </button>
          ) : (
            <button
              type="button"
              className="profile-form__button profile-form__button-edit"
              onClick={(e) => {
                e.preventDefault();
                setShowSaveBtn(true);
              }}
            >
              Редактировать
            </button>
          )}

          <button
            onClick={onSignOut}
            className="profile-form__button profile-form__button-signout"
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
