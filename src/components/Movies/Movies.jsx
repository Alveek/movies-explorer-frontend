import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

// здесь код практически идентичный с savedMovies, то не по DRY совсем
// что-то из этого можно перенести в App, но тогда там нужно будет писать
// кучу условий и проверок отдельно для movies и savedMovies

const Movies = ({ movies, savedMovies, onLikeMovie, apiErrors }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem('searchedMovies');
  const queries = localStorage.getItem('searchQueryMovies');
  const [searchQuery, setSearchQuery] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    if (!filteredMovies.length) {
      setIsLoading(true);
    }

    // Имитация задержки. Хз, как юзер должен увидеть прелоудер, если фильмы уже из ЛС берутся
    setTimeout(
      () => {
        // Каждый раз при сабмите сохраняй в ЛС ключевое слово и стейт ЧБ
        let filtered = [];
        localStorage.setItem('searchQueryMovies', JSON.stringify(query));

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
        setIsLoading(false);
      },
      filteredMovies.length ? 0 : 300
    );
  };

  // Сброс ключевого слова в инпуте и истории поиска
  // это от себя добавил, потому что без сброса потом не показать
  // все сохранившиеся фильмы, при поиске, что довольно тупо.

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
        apiErrors={apiErrors}
      />

      {apiErrors?.movies && Object.keys(apiErrors?.movies).length !== 0 ? (
        <p className="movies__api-error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : (
        ''
      )}

      {isLoading ? (
        <Preloader />
      ) : filteredMovies.length ? (
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
    </section>
  );
};

export default Movies;
