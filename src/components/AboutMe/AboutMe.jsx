import React from 'react';
import './AboutMe.css';
import StudentPhoto from '../../images/coder_birth.gif';

const AboutMe = () => {
  return (
    <section className="about-me" id="aboutme">
      <h3 className="about-me__section-title">Студент</h3>
      <hr />

      <div className="about-me__container">
        <div className="about-me__description">
          <p className="about-me__description-name">Алексей</p>
          <p className="about-me__description-about">
            Фронтенд-разработчик (ReactJS)
          </p>
          <p className="about-me__description-text">
            Я родился под Великим Новгородом, закончил политех по специальности
            маркетинг в Тверской области. Потом поступил в Казани в КГТУ на
            менеджера (не спрашивайте, почему я на таких дурацких специальностях
            учился (hint: папа)), но отчислился по собственному желанию и пошел
            служить армию. Как вернулся, решил временно устроиться на завод по
            производству гибкой упаковки. До сих пор там работаю..😢 Меня всегда
            привлекал кодинг, но я никогда не был уверен в своих силах им стать.
            А зря. Программирование - это единственное, чем я занимаюсь
            несколько лет и до сих пор не бросил. Мне нравится постоянно
            учиться, думать головой, решать задачи (но не абсурдные). Я бы хотел
            стать программистом фултайм. Поддерживайте своих близких (особенно
            детей), оставьте при себе свои желания, сомнения и страхи. И тогда,
            возможно, в мире будет побольше счастливых людей.
            <br />
            <small>
              На гифке вы можете наблюдать рождение программиста после окончания
              курса в Яндекс Практикуме.
            </small>
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
        <div className="about-me__img-container">
          <img
            className="about-me__description-photo"
            src={StudentPhoto}
            alt="Фотография студента"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
