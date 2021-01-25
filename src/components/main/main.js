import React from 'react';
import Banner from '../banner/banner';
import Votes from '../votes/votes';
import AddCandidate from '../add-candidate/addCandidate';
import './main.scss';

export const Main = () => {
  return (
    <main className="main__layout">
      <Banner />
      <Votes />
      <AddCandidate/>
    </main>
  );
};
