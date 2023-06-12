import React, { useState, useEffect, useCallback } from 'react';
import './Drawer.css';
import Navigation from '../Navigation/Navigation';

const Drawer = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, closeDrawer]);

  return (
    <div className="drawer">
      <button className="drawer__burger-btn" onClick={toggleDrawer}></button>
      {isOpen && <div className="drawer__overlay" onClick={closeDrawer}></div>}
      <div
        onClick={(e) => (e.target.href ? closeDrawer() : '')}
        className={`drawer__container ${isOpen ? 'drawer__container_open' : ''}`}
      >
        <button className="drawer__close-btn" onClick={closeDrawer}></button>

        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};

export default Drawer;
