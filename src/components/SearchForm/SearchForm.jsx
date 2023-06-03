import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import IconFind from '../../images/find.svg';

const SearchForm = () => {
  return (
    <div className="search-form__container">
      <form className="search-form">
        <input
          className="search-form__input"
          type="search"
          placeholder="Фильм"
        />

        <button type="submit" className="search-form__button">
          <img src={IconFind} alt="" />
        </button>
        <FilterCheckbox />
      </form>
    </div>
  );
};

export default SearchForm;
