import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ movies, savedMovies, onLikeMovie }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem('searchedMovies');
  const queries = localStorage.getItem('searchQueryMovies');
  const [searchQuery, setSearchQuery] = useState({});

  useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
  }, [searchedMovies]);

  useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
    }
  }, [queries]);

  const filterMovies = (query) => {
    localStorage.setItem('searchQueryMovies', JSON.stringify(query));

    let filtered = [];
    if (query.isShortFilmChecked) {
      filtered = movies.filter((m) => {
        return (
          m.duration <= 40 &&
          m.nameRU.toLowerCase().trim().includes(query.searchText)
        );
      });
      setFilteredMovies(filtered);
      localStorage.setItem('searchedMovies', JSON.stringify(filtered));
    } else if (!query.isShortFilmChecked) {
      filtered = movies.filter((m) => {
        return m.nameRU.toLowerCase().trim().includes(query.searchText);
      });
      setFilteredMovies(filtered);
      localStorage.setItem('searchedMovies', JSON.stringify(filtered));
    }
  };

  const handleResetInput = () => {
    setFilteredMovies([]);
    setSearchQuery({});
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('searchQueryMovies');
  };

  return (
    <section className="movies">
      <SearchForm
        onFilter={filterMovies}
        searchQuery={searchQuery}
        onResetInput={handleResetInput}
      />
      {filteredMovies.length ? (
        <MoviesCardList
          movies={filteredMovies}
          savedMovies={savedMovies}
          onLikeMovie={onLikeMovie}
        />
      ) : (
        searchedMovies && (
          <p className="movies__not-found">
            По вашему запросу ничего не найдено
          </p>
        )
      )}
      <button className="movies__more-btn">Ещё</button>
    </section>
  );
};

export default Movies;
