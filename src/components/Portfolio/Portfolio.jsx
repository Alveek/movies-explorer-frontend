import React from 'react';
import ArrowLink from '../../images/arrow-link.svg';

const Portfolio = () => {
  return (
    <>
      <p>Портфолио</p>
      <a href="https://github.com/Alveek">
        <span>Статичный сайт</span> <img src={ArrowLink} alt="arrow" />
      </a>
      <hr />
      <a href="https://github.com/Alveek">
        <span>Адаптивный сайт</span> <img src={ArrowLink} alt="arrow" />
      </a>
      <hr />
      <a href="https://github.com/Alveek">
        <span>Одностраничное приложение</span>{' '}
        <img src={ArrowLink} alt="arrow" />
      </a>
    </>
  );
};

export default Portfolio;
