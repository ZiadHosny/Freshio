import React from 'react'
import { createContext , useEffect , useState ,  } from "react";
import axios from "axios";


export let chickenApiContext = createContext([]);

export default function ApiContext(props) {

    const [chickens, setChickens] = useState([]);

  async function getChickens() {

    let {data}  = await axios.get(

      "https://freshio.mocklab.io/chicken"

    );

    setChickens(data);

  }

  useEffect(() => {

    getChickens();

  }, []);
    


  return (
    <chickenApiContext.Provider value={{chickens}}>{props.children}</chickenApiContext.Provider>
  )
}




