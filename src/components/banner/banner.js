import React, { Fragment, useState } from 'react';
import './banner.scss';

const renderBanner = (isToggled, toggleBanner) => {
  let content;

  if (isToggled) {
    content = (
      <Fragment>
        <div className="banner__title">
          <p className="banner__title--slogan">Speak out. Be heard.</p>
          <h2 className="banner__title--head">Be counted</h2>
        </div>
        <p className="banner__container--description">
          Rule of thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak and speak freely. It's easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
        <span
          className="banner__container--icon"
          onClick={() => toggleBanner()}
        >
          <i class="fas fa-times"></i>
        </span>
      </Fragment>
    );
  }

  return content;
};

const Banner = () => {
  const [isToggled, setToggled] = useState(true);
  const toggleBanner = () => setToggled(!isToggled);

  return (
    <section className={isToggled ? 'banner__container' : ''}>
      {renderBanner(isToggled, toggleBanner)}
    </section>
  );
};

export default Banner;
