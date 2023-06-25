import { useState, useMemo, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import useResize from '../../hooks/useResize.js';

const MoviesCardList = ({
  movies,
  savedMovies,
  onLikeMovie,
  onDeleteMovie
}) => {
  let size = useResize();
  const [moviesToAdd, setMoviesToAdd] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setMoviesToAdd(0);
  }, [movies]);

  const moviesToRender = useMemo(() => {
    const countToRender = size.width < 768 ? 5 : size.width < 1280 ? 8 : 12;

    return movies.slice(0, countToRender + moviesToAdd);
  }, [movies, moviesToAdd, size]);

  return (
    <>
      <ul className="movies-cardlist">
        {moviesToRender.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              savedMovies={savedMovies}
              onLikeMovie={onLikeMovie}
              onDeleteMovie={onDeleteMovie}
            />
          );
        })}
      </ul>
      {location.pathname === '/movies' &&
        movies.length > moviesToRender.length && (
          <button
            onClick={() => {
              setMoviesToAdd((prev) => prev + (size.width >= 1280 ? 3 : 2));
            }}
            className="movies__more-btn"
          >
            Еще
          </button>
        )}
    </>
  );
};

export default MoviesCardList;
