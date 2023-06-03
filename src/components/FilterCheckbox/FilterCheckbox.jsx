import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <>
      <div className="filter-checkbox">
        <input className="filter-checkbox__input" type="checkbox" id="switch" />
        <label className="filter-checkbox__label" for="switch"></label>
      </div>
      <span className="filter-checkbox__text">Короткометражки</span>
    </>
  );
};

export default FilterCheckbox;
