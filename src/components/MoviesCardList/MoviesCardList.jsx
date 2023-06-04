import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
  return (
    <ul className="movies-cardlist">
      {movies?.map((movie) => {
        return <MoviesCard movie={movie} />;
      })}
    </ul>
  );
};

export default MoviesCardList;
