import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ movies, savedMovies, onLikeMovie }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem('searchedMovies');
  const queries = localStorage.getItem('searchQueryMovies');
  const [searchQuery, setSearchQuery] = useState({});

  // Если в ЛС есть история поиска фильмов, отобрази их
  useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
  }, [searchedMovies]);

  // Если в ЛС есть история запросов (текст и ЧБ), подставь их
  useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
    }
  }, [queries]);

  // это фунция пробрасывается в Search, откуда при сабмите принимает ключевое слово и стейт ЧБ
  // затем фильтрует фильмы и результат уже пробрасывается в MoviesCardList
  const filterMovies = (query) => {
    // Каждый раз при сабмите сохраняй в ЛС ключевое слово и стейт ЧБ
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

  // Сброс ключевого слова в инпуте и истории поиска
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
