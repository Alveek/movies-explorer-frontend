import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import { moviesData } from '../../utils/movies.js';

const SavedMovies = ({ savedMovies, onDeleteMovie }) => {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={savedMovies} onDeleteMovie={onDeleteMovie} />
    </section>
  );
};

export default SavedMovies;
