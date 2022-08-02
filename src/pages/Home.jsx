import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import DealOfTheDay from '../components/dealOfTheDay/DealOfTheDay';
import Chicken from './Chicken';
import ApiContext from '../context/ApiContext';
import Section from '../components/section/Section';
import AdCard from '../components/adCard/AdCard';
import FeedBack from '../components/feedBack/FeedBack';
import { useContext } from 'react';
import { dataApiContext } from '../context/ApiContext';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  // const [allCategory, setAllCategory] = useState([]);
  // const [topProducts, setTopProducts] = useState([]);
  // const [topArrival, setTopArrival] = useState([]);

  async function getProducts() {
    let { data } = await axios.get('https://freshhome.mocklab.io/home');
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <DealOfTheDay />

      {products ? (
        <Section title="Featured Products" data={products.allCategory} />
      ) : (
        <p>Loading...</p>
      )}
      <Section title="Top Products" data={products.topProducts} />

      <AdCard />

      <Section title="New Arrival" data={products.topArrival} />

      <FeedBack />
    </div>
  );
};

export default Home;
