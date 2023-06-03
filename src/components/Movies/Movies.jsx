import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
// import { getHoursAndMinutes } from '../../utils/convertMinutes.js';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
    </section>
  );
};

export default Movies;
