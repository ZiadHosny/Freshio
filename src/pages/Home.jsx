import React from 'react';
import Header from '../components/header/Header';
import DealOfTheDay from '../components/dealOfTheDay/DealOfTheDay';
import Chicken from './Chicken';
import ApiContext from '../context/ApiContext';

const Home = () => {
  return (
    <div>
      <Header />
      <DealOfTheDay />
    </div>
  );
};

export default Home;
