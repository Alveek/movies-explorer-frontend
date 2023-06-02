import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <h3 className="techs__title">Технологии</h3>
      <hr />

      <div className="techs__description">
        <h2 className="techs__descripion-title">7 технологий</h2>
        <p className="techs__description-text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>

      <div className="tech__badges">
        <span className="tech__badge">HTML</span>
        <span className="tech__badge">CSS</span>
        <span className="tech__badge">JS</span>
        <span className="tech__badge">React</span>
        <span className="tech__badge">Git</span>
        <span className="tech__badge">Express.js</span>
        <span className="tech__badge">mongoDB</span>
      </div>
    </section>
  );
};

export default Techs;
