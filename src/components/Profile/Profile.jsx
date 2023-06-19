import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { validateEmail } from '../../utils/helpers';

const Profile = ({ onSignOut, onUpdateUser, apiErrors, isOK }) => {
  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormAndValidation();
  const { currentUser } = useContext(CurrentUserContext);
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

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

  // если запрос прошел успешно, скрыть кнопку сохранить
  // т.е. если isOK и нет ошибок
  useEffect(() => {
    if (isOK) {
      setShowSaveBtn(false);
      setShowSuccessMsg(true);
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
            disabled={!showSaveBtn}
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
            disabled={!showSaveBtn}
            required
          />
          <span
            className={
              'profile-form__input-error profile-form__input-error_active'
            }
          >
            {values.email?.length === 0
              ? 'Это поле не должно быть пустым!'
              : values.email?.length > 0 && !validateEmail(values.email)
              ? 'Неверный формат почты!'
              : ''}
          </span>
        </div>

        <div className="profile-form__buttons">
          {apiErrors.profile && (
            <span className="profile-form__error-message">
              {apiErrors.profile.errorText}
            </span>
          )}

          {showSuccessMsg && (
            <span className="profile-form__success-message">
              Данные успешно обновлены!
            </span>
          )}

          {showSaveBtn ? (
            <button
              type="submit"
              className="profile-form__button profile-form__button-save"
              disabled={
                !isValid ||
                (values.name === currentUser.name &&
                  values.email === currentUser.email) ||
                !validateEmail(values.email)
              }
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
                setShowSuccessMsg(false);
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
