import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr />
      <div>
        <p>{new Date().getFullYear()}</p>
        <a href="https://github.com/Alveek" target="_blank" rel="noreferrer">
          Яндекс.Практикум
        </a>
        <a href="https://github.com/Alveek" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
