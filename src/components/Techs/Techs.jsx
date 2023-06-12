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

      <div className="techs__badges">
        <span className="techs__badge">HTML</span>
        <span className="techs__badge">CSS</span>
        <span className="techs__badge">JS</span>
        <span className="techs__badge">React</span>
        <span className="techs__badge">Git</span>
        <span className="techs__badge">Express.js</span>
        <span className="techs__badge">mongoDB</span>
      </div>
    </section>
  );
};

export default Techs;
