import React, { useState, useEffect } from 'react';
import './Movies.css';
import { moviesApi } from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    moviesApi.getMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  const filterMovies = (searchParams) => {
    let filtered = [];
    if (searchParams.isShortFilmChecked) {
      filtered = movies.filter((m) => m.duration <= 40);
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }

    console.log(searchParams);
  };

  return (
    <section className="movies">
      <SearchForm onFilter={filterMovies} />
      <MoviesCardList movies={filteredMovies} />
      <button className="movies__more-btn">Ещё</button>
    </section>
  );
};

export default Movies;
