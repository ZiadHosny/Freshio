import React from 'react'
import { createContext, useState} from "react";
import axios from "axios";

export let subApiContext = createContext([]);

export default function SubCategoryContext(props) {
 
  const [subCategory, setSubCategory] = useState(null);

  let allCategory = [];
  let allProduct = [];
  

  async function getSubData(path) {

    if (path == "/") {
      
      let { data } = await axios.get(

        `https://freshfreshio.mocklab.io/home`

      );
     setSubCategory(data);
    }
    else {

      let { data } = await axios.get(
        `https://foodfresh.mocklab.io${path}`
      );

      allCategory = Object.values(data);
      allCategory.forEach((item)=>{
        allProduct.push(...item)
       })

       setSubCategory(allProduct);
       console.log(allProduct)
     
    }

  }


  return (
    <subApiContext.Provider value={{ subCategory ,getSubData }}>{props.children}</subApiContext.Provider>
  )
}


