import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './headerNavBar.scss';

const HeaderNavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [windowWindow, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <section className="header__container--style">
      <h1>Rule of Thumb</h1>
      <nav className="header__container--nav">
        <div
          className="header__nav--button"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <i class="fas fa-bars"></i>
        </div>
        <ul
          className={
            navOpen || windowWindow > 768
              ? 'header__nav--list'
              : 'header__nav--hide'
          }
        >
          <li>
            <NavLink to="/past-trials/">Past Trials</NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works/">How It Works</NavLink>
          </li>
          <li>
            <NavLink to="/log-in-sign-in/">Log In / Sign Up</NavLink>
          </li>
          <i class="fas fa-search"></i>
        </ul>
      </nav>
    </section>
  );
};

export default HeaderNavBar;
