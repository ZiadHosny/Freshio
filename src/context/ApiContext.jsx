import React from 'react'
import { createContext, useEffect, useState, } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

export let dataApiContext = createContext([]);

export default function ApiContext(props) {

 

  const [category, setCategory] = useState([]);

  async function getData(path , ) {

    if (path == "/") {
      
      let { data } = await axios.get(

        `https://freshfreshio.mocklab.io/home`

      );
      setCategory(data);
    }
    else {

      let { data } = await axios.get(
        `https://foodfresh.mocklab.io${path}`
      );
      setCategory(data);
    }

  }





  return (
    <dataApiContext.Provider value={{ category,getData }}>{props.children}</dataApiContext.Provider>
  )
}




