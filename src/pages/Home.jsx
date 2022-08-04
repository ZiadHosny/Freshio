import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Section from '../components/section/Section';

import FeedBack from '../components/feedBack/FeedBack';
import HomeCategory from '../components/section/HomeCategory';
import axios from 'axios';
import HomeLoader from '../components/section/HomeLoader/HomeLoader';

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
      {
        products.categories
        ?
        <div>
          
          <Header />
          <HomeCategory title='Categories' data={products.categories}/>
          <Section title="Featured Products" data={products.allCategory} />
          <Section title="Top Products" data={products.topProducts} />
          <Section title="New Arrival" data={products.topArrival} />
          <FeedBack />

        </div>
        :
        <HomeLoader/>
      }

    </div>
  );
};

export default Home;
