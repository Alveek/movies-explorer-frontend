import React from 'react';
import './MoviesCard.css';
import { getHoursAndMinutes } from '../../utils/convertMinutes.js';

const MoviesCard = ({ movie }) => {
  return (
    <li className="moviescard__container" key={movie.movieId}>
      <img
        className="moviecard__image"
        src={movie.thumbnail}
        alt={movie.nameRU}
      />
      <div className="moviecard__details">
        <p className="moviecard__name">{movie.nameRU}</p>
        <p className="moviecard__duration">
          {getHoursAndMinutes(movie.duration)}
        </p>
        <button
          className={`moviecard__like-btn ${
            movie.isLiked ? ' moviecard__like-btn_liked' : ''
          }`}
        ></button>
      </div>
    </li>
  );
};

export default MoviesCard;
