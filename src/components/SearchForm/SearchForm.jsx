import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import IconFind from '../../images/find.svg';

const SearchForm = ({ onFilter, searchQuery, onResetInput }) => {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const isChecked = JSON.parse(localStorage.getItem('filterCheckBox'));
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(isChecked);

  useEffect(() => {
    if (searchQuery.searchText) {
      setSearchText(searchQuery.searchText);
    }
  }, [searchQuery.searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const checkFilterBox = () => {
    if (searchText !== '') {
      setIsShortFilmChecked(!isShortFilmChecked);
      localStorage.setItem('filterCheckBox', !isShortFilmChecked);

      onFilter({
        searchText: searchText,
        isShortFilmChecked: !isShortFilmChecked
      });
    } else {
      setIsShortFilmChecked(!isShortFilmChecked);
      localStorage.setItem('filterCheckBox', !isShortFilmChecked);

      onFilter({
        searchText: searchQuery.searchText,
        isShortFilmChecked: !isShortFilmChecked
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchText) {
      setError('Нужно ввести ключевое слово');
      return;
    } else {
      onFilter({ searchText, isShortFilmChecked });
    }
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__input-field">
          <input
            className="search-form__input"
            name="search"
            value={searchText || ''}
            placeholder="Фильм"
            min="1"
            onChange={handleChange}
          />

          <button
            className="search-form__reset-button"
            type="button"
            onClick={() => {
              onResetInput();
              setSearchText('');
            }}
          >
            Сброс
          </button>

          <span className={`search-form__input-error`}>
            {!searchText && error}
          </span>
        </div>

        <button type="submit" className="search-form__button">
          <img src={IconFind} alt="Изображение иконки поиска" />
        </button>

        <FilterCheckbox
          isChecked={searchQuery.isShortFilmChecked}
          onCheck={checkFilterBox}
        />
      </form>
    </div>
  );
};

export default SearchForm;
