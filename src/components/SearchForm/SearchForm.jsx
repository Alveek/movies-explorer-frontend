import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import IconFind from '../../images/find.svg';

const SearchForm = () => {
  return (
    <div className="search">
      <form className="search__form">
        <input
          className="search__form-input"
          type="search"
          placeholder="Фильм"
          required
        />

        <button type="submit" className="search__form-button">
          <img src={IconFind} alt="Изображение иконки поиска" />
        </button>
        <FilterCheckbox />
      </form>
    </div>
  );
};

export default SearchForm;
