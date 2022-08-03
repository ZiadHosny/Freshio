import React from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';

export let dataApiContext = createContext([]);

export default function ApiContext(props) {
  const [category, setCategory] = useState([]);

  async function getData(path) {
    if (path === '/') {
      let { data } = await axios.get(
        `https://healthy-food-ed8b5-default-rtdb.firebaseio.com/home.json`
      );
      setCategory(data);
    } else {
      let { data } = await axios.get(
        `https://healthy-food-ed8b5-default-rtdb.firebaseio.com/${path}.json`
      );

      setCategory(data);
    }
  }

  return (
    <dataApiContext.Provider value={{ category, getData }}>
      {props.children}
    </dataApiContext.Provider>
  );
}
