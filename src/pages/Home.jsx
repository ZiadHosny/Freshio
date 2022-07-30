import React from 'react';
import Header from '../components/header/Header';
import DealOfTheDay from '../components/dealOfTheDay/DealOfTheDay';
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
    </div>
  );
};

export default Home;
