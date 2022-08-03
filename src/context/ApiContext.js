import React from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';

export let dataApiContext = createContext([]);

export default function ApiContext(props) {
  const [allItems, setAllItems] = useState([]);
  const [maxMinPrice, setMaxMinPrice] = useState([]);
  const [category, setCategory] = useState(null);
  const [brandArray , setBrandArray] = useState([]);
  let price = [];
  let brand ;

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
      setAllItems(data);
      price=maxMinPriceFilter(data);
      setMaxMinPrice(price);
      brand = brandName(data);
      setBrandArray(brand)
      
    
    }
  }

  const filterSale = (e) => {
    let saleItems = [];
    if (e.target.checked) {
      saleItems = category.filter((item) => {
        if (item.sale) {
          return item;
        }
      });
    } else {
      saleItems = [...allItems];
    }
    setCategory(saleItems);
  };

  const maxMinPriceFilter=(arr)=>
  {
    let maxPrice=0,minPrice=15000;
    for (let i = 0; i < arr.length-1; i++) {
      if(arr[i].price<minPrice)
      {
        minPrice=arr[i].price;
      }
      if(arr[i].price>maxPrice)
      {
        maxPrice=arr[i].price;
      }

    } 
    return [minPrice , maxPrice];
  }


  function brandName(allBrand){
    let localBrand = [];
    allBrand.forEach((element)=>{
      if(localBrand.indexOf(element.brand) === -1 ) {
        localBrand.push(element.brand);
      }
    })

    return localBrand
  }

  function filterBrand (e) {
    let brandItem = [];
 
    if(e.target.value === "All") {

      setCategory(allItems)


    }

    else {
      brandItem = allItems.filter((element)=>{

        if( element.brand == e.target.value ) 
        {
          return element
        }
    
      })
     
      setCategory(brandItem)

    }
   
  }

  return (
    <dataApiContext.Provider value={{ category,maxMinPrice,allItems , brandArray , getData ,filterSale,setCategory ,filterBrand  }}>
      {props.children}
    </dataApiContext.Provider>
  );
}
