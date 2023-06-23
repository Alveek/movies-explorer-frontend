import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ movies, savedMovies, onLikeMovie }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState(
    localStorage.getItem('searchedMovies') || []
  );

  useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(searchedMovies);
    }
  }, [searchedMovies, filteredMovies]);

  console.log({ filteredMovies });
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
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
      setSearchedMovies(filteredMovies);
    } else if (!searchParams.isShortFilmChecked) {
      filtered = movies.filter((m) => {
        return m.nameRU.toLowerCase().trim().includes(searchParams.searchText);
      });
      setFilteredMovies(filtered);
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
      setSearchedMovies(filteredMovies);
    }

    console.log(searchParams);
  };

  return (
    <section className="movies">
      <SearchForm onFilter={filterMovies} />
      <MoviesCardList
        movies={filteredMovies}
        savedMovies={savedMovies}
        onLikeMovie={onLikeMovie}
      />
      <button className="movies__more-btn">Ещё</button>
    </section>
  );
};

export default Movies;
