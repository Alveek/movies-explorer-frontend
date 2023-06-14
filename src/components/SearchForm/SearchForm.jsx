import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import IconFind from '../../images/find.svg';

const SearchForm = ({ onFilter }) => {
  const isChecked = JSON.parse(localStorage.getItem('filterCheckBox'));
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(isChecked);
  const [searchText, setSearchText] = useState('');

  const checkFilterBox = () => {
    setIsShortFilmChecked(!isShortFilmChecked);
    localStorage.setItem('filterCheckBox', !isShortFilmChecked);
  };

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={(e) => {
          e.preventDefault();
          onFilter({ searchText, isShortFilmChecked });
        }}
      >
        <input
          className="search__form-input"
          type="search"
          placeholder="Фильм"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button type="submit" className="search__form-button">
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
