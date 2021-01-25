import React from 'react';
import { Link } from 'react-router-dom';
import './emptyRoutes.scss';

const EmptyRoute = ({ title }) => {
  const generateBlocks = () => {
    let blocks = [];
    for (let i = 0; i < 101; i++) {
      blocks.push(<div key={i} className="section__blocks"></div>);
    }
    return blocks;
  };
  return (
    <section className="section__animation">
      <div className="section__animation--headContainer">
        <h2 className="section__animation--title">{title}</h2>
        <button className="section__animation--button">
          <Link to="/">Go back</Link>
        </button>
      </div>
      <div className="section__banner">{generateBlocks()}</div>
    </section>
  );
};

export default EmptyRoute;
