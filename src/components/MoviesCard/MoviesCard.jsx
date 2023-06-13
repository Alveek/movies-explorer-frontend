import React from 'react';
import './MoviesCard.css';
import { getHoursAndMinutes } from '../../utils/convertMinutes.js';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie }) => {
  let location = useLocation();
  const isLikeButton = location.pathname === '/movies';
  const isDeleteButton = location.pathname === '/saved-movies';

  return (
    <li className="moviescard">
      <a
        className="moviescard__image-container"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="moviescard__image"
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU}
        />
      </a>

      <div className="moviescard__details">
        <p className="moviescard__name">{movie.nameRU}</p>
        <p className="moviescard__duration">
          {getHoursAndMinutes(movie.duration)}
        </p>
        {isLikeButton && (
          <button
            className={`moviescard__like-btn ${
              movie.isLiked ? ' moviescard__like-btn_liked' : ''
            }`}
          ></button>
        )}

        {isDeleteButton && (
          <button className={`moviescard__delete-btn`}></button>
        )}
      </div>
    </li>
  );
};

export default MoviesCard;
