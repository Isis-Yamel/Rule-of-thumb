import React, { Fragment } from 'react';
import './votes.scss';
import kanyeImage from '../../assets/kanye.png';

const Votes = () => {
  return (
    <Fragment>
      <h2 className="votes__title">Votes</h2>
      <section className="votes__container">
        <article className="votes__item votes__item--margin">
          <img className="votes__image" src={kanyeImage} alt="kanye west" />
          <div className="votes__information">
            <h3 className="votes__information--title">
              <span className="votes__button votes__button--up votes__button--track">
                <i class="fas fa-thumbs-up"></i>
              </span>
              Kanye West
            </h3>
            <p className="votes__information--time">1 month ago</p>
            <p className="votes__information--description">This is a description</p>
            <button className="votes__button votes__button--up">
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button className="votes__button votes__button--down">
              <i class="fas fa-thumbs-down"></i>
            </button>
            <input className="votes__button--vote" type="submit" value="Vote Now" />
          </div>
          <progress className="votes__progressBar" id="progress" max="100" value="70"></progress>
          <div className="votes__progressBar--info">
            <div>
              <i class="fas fa-thumbs-up"></i>
              <span>70%</span>
            </div>
            <div>
              <span>30%</span>
              <i class="fas fa-thumbs-down"></i>
            </div>
          </div>
        </article>
        <article className="votes__item">
          <img className="votes__image" src={kanyeImage} alt="kanye west" />
          <div className="votes__information">
            <h3 className="votes__information--title">
              <span className="votes__button votes__button--up votes__button--track">
                <i class="fas fa-thumbs-up"></i>
              </span>
              Kanye West
            </h3>
            <p className="votes__information--time">1 month ago</p>
            <p className="votes__information--description">This is a description</p>
            <button className="votes__button votes__button--up">
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button className="votes__button votes__button--down">
              <i class="fas fa-thumbs-down"></i>
            </button>
            <input className="votes__button--vote" type="submit" value="Vote Now"
            />
          </div>
          <progress className="votes__progressBar" id="progress" max="100" value="70"></progress>
          <div className="votes__progressBar--info">
            <div>
              <i class="fas fa-thumbs-up"></i>
              <span>70%</span>
            </div>
            <div>
              <span>30%</span>
              <i class="fas fa-thumbs-down"></i>
            </div>
          </div>
        </article>
        <article className="votes__item votes__item--margin">
          <img className="votes__image" src={kanyeImage} alt="kanye west" />
          <div className="votes__information">
            <h3 className="votes__information--title">
              <span className="votes__button votes__button--up votes__button--track">
                <i class="fas fa-thumbs-up"></i>
              </span>
              Kanye West
            </h3>
            <p className="votes__information--time">1 month ago</p>
            <p className="votes__information--description">This is a description</p>
            <button className="votes__button votes__button--up">
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button className="votes__button votes__button--down">
              <i class="fas fa-thumbs-down"></i>
            </button>
            <input className="votes__button--vote" type="submit" value="Vote Now" />
          </div>
          <progress className="votes__progressBar" id="progress" max="100" value="70"></progress>
          <div className="votes__progressBar--info">
            <div>
              <i class="fas fa-thumbs-up"></i>
              <span>70%</span>
            </div>
            <div>
              <span>30%</span>
              <i class="fas fa-thumbs-down"></i>
            </div>
          </div>
        </article>
        <article className="votes__item">
          <img className="votes__image" src={kanyeImage} alt="kanye west" />
          <div className="votes__information">
            <h3 className="votes__information--title">
              <span className="votes__button votes__button--up votes__button--track">
                <i class="fas fa-thumbs-up"></i>
              </span>
              Kanye West
            </h3>
            <p className="votes__information--time">1 month ago</p>
            <p className="votes__information--description">This is a description
            </p>
            <button className="votes__button votes__button--up">
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button className="votes__button votes__button--down">
              <i class="fas fa-thumbs-down"></i>
            </button>
            <input className="votes__button--vote" type="submit" value="Vote Now"
            />
          </div>
          <progress className="votes__progressBar" id="file" max="100" value="70"></progress>
          <div className="votes__progressBar--info">
            <div>
              <i class="fas fa-thumbs-up"></i>
              <span>70%</span>
            </div>
            <div>
              <span>30%</span>
              <i class="fas fa-thumbs-down"></i>
            </div>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default Votes;
