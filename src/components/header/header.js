import React from 'react';
import HeaderNavBar from '../header-nav-bar/headerNavBar';
import HeaderInformation from '../header-information/headerInformation';
import './header.scss';

const HeadSection = () => {
  return (
    <header className="header__container">
      <HeaderNavBar />
      <HeaderInformation />
    </header>
  );
};

export default HeadSection;
