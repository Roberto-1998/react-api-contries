import React from 'react';
import { Helmet } from '../../components/Helmet';
import { ListOfCountries } from '../../components/ListOfCountries';
import { home } from '../../constants/helmet';

const Home = () => {
  return (
    <>
      <Helmet title={home.title} content={home.content} />
      <ListOfCountries />
    </>
  );
};

export default Home;
