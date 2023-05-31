import React from 'react';
import StudentPhoto from '../../images/avatar.jpg';

const AboutMe = () => {
  return (
    <>
      <h3>Студент</h3>
      <hr />
      <div>
        <p>Виталий</p>
        <p>Фронтенд-разработчик, 30 лет</p>
        <p>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a href="https://github.com/Alveek" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
      <img src={StudentPhoto} alt="Фотка студента" />
    </>
  );
};

export default AboutMe;
