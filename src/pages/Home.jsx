/*eslint-disable */

import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Section from '../components/section/Section';
import axios from 'axios';

import FeedBack from '../components/feedBack/FeedBack';
import HomeCategory from '../components/section/HomeCategory';

import HomeLoader from '../components/section/HomeLoader/HomeLoader';

const Home = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let { data } = await axios.get(
      'https://healthy-food-ed8b5-default-rtdb.firebaseio.com/home.json'
    );
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.categories ? (
        <div>
          <Header />
          <HomeCategory title="Categories" data={products.categories} />
          <Section title="Featured Products" data={products.allCategory} />
          <Section title="Top Products" data={products.topProducts} />
          <Section title="New Arrival" data={products.topArrival} />
          <FeedBack />
        </div>
      ) : (
        <HomeLoader />
      )}
    </div>
  );
};

export default Home;

/*eslint-disable */

