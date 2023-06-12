import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h3 className="about-project__title">О проекте</h3>
      <hr />

      <div className="about-project__container">
        <div className="about-project__description">
          <p className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="about-project__description">
          <p className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-project__duration">
        <div className="about-project__duration-weeks about-project__duration-weeks_one">
          1 неделя
        </div>
        <div className="about-project__duration-weeks about-project__duration-weeks_four">
          4 недели
        </div>
      </div>

      <div className="about-project__tech">
        <div className="about-project__tech-weeks about-project__tech-weeks_one">
          Back-end
        </div>
        <div className="about-project__tech-weeks about-project__tech-weeks_four">
          Front-end
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
