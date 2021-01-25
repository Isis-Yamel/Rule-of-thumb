import React, { Fragment } from 'react';
import HeadSection from '../components/header/header';
import { Main } from '../components/main/main';
import { Footer } from '../components/footer/footer';

const Home = () => {
  return (
    <Fragment>
      <HeadSection />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default Home;
