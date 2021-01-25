import React from 'react';
import './headerInformation.scss';

const HeaderInformation = () => {
  return (
    <section className="header__information">
      <article className="header__information--position">
        <div className="header__information--style">
          <h2 className="header__information--title">
            <span className="header__information--titleInfo">
              Whats's your opinion on
            </span>
            <span className="header__information--titleName">
              Pope Francis?
            </span>
          </h2>
          <p>
            He's talking tough on clergy sexual abuse, but is he just another
            papal pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up)
          </p>
          <span className="header__link">
            <i class="fab fa-wikipedia-w"></i>
            <a
              className="header__link--style"
              href="https://en.wikipedia.org/wiki/Pope_Francis"
            >
              More Information
            </a>
          </span>
          <p className="header__veredict">What's Your Veredict?</p>
        </div>
        <div>
          <button className="header__button header__button--green">
            <i class="header__button--icon fas fa-thumbs-up"></i>
          </button>
          <button className="header__button header__button--yellow">
            <i class="header__button--icon fas fa-thumbs-down"></i>
          </button>
        </div>
      </article>
    </section>
  );
};

export default HeaderInformation;
