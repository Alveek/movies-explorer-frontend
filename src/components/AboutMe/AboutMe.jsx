import React from 'react';
import './AboutMe.css';
import StudentPhoto from '../../images/avatar.jpg';

const AboutMe = () => {
  return (
    <section className="about-me" id="aboutme">
      <h3 className="about-me__section-title">Студент</h3>
      <hr />

      <div className="about-me__container">
        <div className="about-me__description">
          <p className="about-me__description-name">Виталий</p>
          <p className="about-me__description-about">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__description-text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>

          <a
            className="about-me__link"
            href="https://github.com/Alveek"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__description-photo"
          src={StudentPhoto}
          alt="Фотка студента"
        />
      </div>
    </section>
  );
};

export default AboutMe;
