// Лоудер взял отсюда - https://codepen.io/Rplus/pen/PWZYRM?editors=1100

import React from 'react';
import './PageLoader.css';

function PageLoader() {
  return (
    <div className="box">
      <div className="cat">
        <div className="cat__body"></div>
        <div className="cat__body"></div>
        <div className="cat__tail"></div>
        <div className="cat__head"></div>
      </div>
      <p>Мяугрузка 🐾🐾🐾</p>
      <small>Котик проверяет токен...</small>
    </div>
  );
}

export default PageLoader;
