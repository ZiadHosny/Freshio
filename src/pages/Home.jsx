import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import DealOfTheDay from '../components/dealOfTheDay/DealOfTheDay';
import Section from '../components/section/Section';
import AdCard from '../components/adCard/AdCard';
import FeedBack from '../components/feedBack/FeedBack';

import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

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
