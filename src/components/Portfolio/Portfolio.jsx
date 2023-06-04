import React from 'react';
import './Portfolio.css';
import ArrowLink from '../../images/arrow-link.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__section-title">Портфолио</h3>

      <div className="portfolio__links">
        <a
          className="portfolio__link"
          href="https://how-to-learn.alveek.xyz"
          target="_blank"
          rel="noreferrer"
        >
          <span>Статичный сайт</span> <img src={ArrowLink} alt="arrow" />
        </a>

        <a
          className="portfolio__link"
          href="https://russian-travel.alveek.xyz"
          target="_blank"
          rel="noreferrer"
        >
          <span>Адаптивный сайт</span> <img src={ArrowLink} alt="arrow" />
        </a>

        <a
          className="portfolio__link"
          href="https://mesto.alveek.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Одностраничное приложение</span>{' '}
          <img src={ArrowLink} alt="arrow" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
