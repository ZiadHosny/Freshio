import React from 'react'
import { createContext, useEffect, useState, } from "react";
import axios from "axios";

export let dataApiContext = createContext([]);

export default function ApiContext(props) {

  let params = window.location.pathname;

  const [category, setCategory] = useState([]);

  async function getData() {

    if (params == "/") {
      let { data } = await axios.get(

        `https://freshfreshio.mocklab.io/home`

      );
      setCategory(data);
    }

    else {
      let { data } = await axios.get(

        `https://freshfreshio.mocklab.io${params}`

      );
      setCategory(data);
    }

  }

  useEffect(() => {

    getData();


  }, []);
  return (
    <dataApiContext.Provider value={{ category,params }}>{props.children}</dataApiContext.Provider>
  )
}





