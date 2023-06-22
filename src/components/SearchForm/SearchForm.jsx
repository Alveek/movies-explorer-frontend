import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import IconFind from '../../images/find.svg';

const SearchForm = ({ onFilter, onGetMovies }) => {
  const { values, handleChange, errors } = useFormAndValidation();
  const [error, setError] = useState('');
  const isChecked = JSON.parse(localStorage.getItem('filterCheckBox'));
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(isChecked);

  const checkFilterBox = () => {
    setIsShortFilmChecked(!isShortFilmChecked);
    localStorage.setItem('filterCheckBox', !isShortFilmChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // onGetMovies();
    if (!values.search) {
      setError('Нужно ввести ключевое слово');
      return;
    } else {
      onFilter({ searchText: values.search, isShortFilmChecked });
    }
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__input-field">
          <input
            className="search-form__input"
            name="search"
            type="search"
            value={values.search || ''}
            placeholder="Фильм"
            min="1"
            onChange={handleChange}
          />
          <span className={`search-form__input-error`}>
            {errors.search}
            {!values.search && error}
          </span>
        </div>

        <button type="submit" className="search-form__button">
          <img src={IconFind} alt="Изображение иконки поиска" />
        </button>

        <FilterCheckbox
          isChecked={isShortFilmChecked}
          onCheck={checkFilterBox}
        />
      </form>
    </div>
  );
};

export default SearchForm;
