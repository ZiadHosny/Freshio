import React from 'react';
import Header from '../components/header/Header';
import DealOfTheDay from '../components/dealOfTheDay/DealOfTheDay';
import Chicken from './Chicken';
import ApiContext from '../context/ApiContext';
import Section from '../components/section/Section'
import AdCard from '../components/adCard/AdCard'
import FeedBack from '../components/feedBack/FeedBack'

const Home = () => {
  return (
    <div>
      <Header />
      <DealOfTheDay />
      <Section title="Featured Products"/>
      <AdCard />
      <FeedBack />
    </div>
  );
};

export default Home;
