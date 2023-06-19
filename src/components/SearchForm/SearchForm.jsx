import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import IconFind from '../../images/find.svg';

const SearchForm = ({ onFilter }) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const isChecked = JSON.parse(localStorage.getItem('filterCheckBox'));
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(isChecked);

  const checkFilterBox = () => {
    setIsShortFilmChecked(!isShortFilmChecked);
    localStorage.setItem('filterCheckBox', !isShortFilmChecked);
  };

  return (
    <div className="search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          onFilter({ searchText: values.search, isShortFilmChecked });
        }}
      >
        <div className="search-form__input-field">
          {' '}
          тп
          <input
            className="search-form__input"
            name="search"
            type="search"
            value={values.search || ''}
            placeholder="Фильм"
            min="1"
            onChange={handleChange}
            required
          />
          <span className={`search-form__input-error`}>{errors.search}</span>
        </div>

        <button
          type="submit"
          className="search-form__button"
          disabled={!isValid}
        >
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
