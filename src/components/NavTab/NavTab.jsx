import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="navtab">
      <a className="navtab__link" href="#about-project">
        О проекте
      </a>
      <a className="navtab__link" href="#techs">
        Технологии
      </a>
      <a className="navtab__link" href="#aboutme">
        Студент
      </a>
    </nav>
  );
};

export default NavTab;
