import React, { useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ movies, onSaveMovie }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterMovies = (searchParams) => {
    let filtered = [];
    if (searchParams.isShortFilmChecked) {
      filtered = movies.filter((m) => {
        return (
          m.duration <= 40 &&
          m.nameRU.toLowerCase().trim().includes(searchParams.searchText)
        );
      });
      setFilteredMovies(filtered);
    } else if (!searchParams.isShortFilmChecked) {
      filtered = movies.filter((m) => {
        return m.nameRU.toLowerCase().trim().includes(searchParams.searchText);
      });
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }

    console.log(searchParams);
  };

  return (
    <section className="movies">
      <SearchForm onFilter={filterMovies} />
      <MoviesCardList movies={filteredMovies} onSaveMovie={onSaveMovie}/>
      <button className="movies__more-btn">Ещё</button>
    </section>
  );
};

export default Movies;
