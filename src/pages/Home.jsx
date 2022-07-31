import React from 'react';
import Header from '../components/header/Header';
import DealOfTheDay from '../components/dealOfTheDay/DealOfTheDay';
import Chicken from './Chicken';
import ApiContext from '../context/ApiContext';
import Section from '../components/section/Section'
import AdCard from '../components/adCard/AdCard'
import FeedBack from '../components/feedBack/FeedBack'
import { useContext } from 'react';
import { dataApiContext } from '../context/ApiContext';



const Home = () => {

  let {category} = useContext(dataApiContext);
  console.log(category)

  console.log(window.location.pathname)
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
