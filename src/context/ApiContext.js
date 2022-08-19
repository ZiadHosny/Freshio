import React from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';

export let dataApiContext = createContext([]);

export default function ApiContext(props) {
  const [allItems, setAllItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [brandArray, setBrandArray] = useState([]);
  const [maxMinPrice, setMaxMinPrice] = useState([]);
  const [maxMinCalory, setMaxMinCalory] = useState([]);
  let price = [];
  let calories = [];
  let brand;

  async function getData(path) {
    let { data } = await axios.get(
      `https://healthy-food-ed8b5-default-rtdb.firebaseio.com${path}.json`
    );

    setCategory(data);
    setAllItems(data);
    price = maxMinPriceFilter(data);
    calories = maxMinCaloryFilter(data);
    setMaxMinCalory(calories);
    setMaxMinPrice(price);
    brand = brandName(data);
    setBrandArray(brand);
  }

  //Filter max , min Calories from Array
  const maxMinCaloryFilter = (arr) => {
    let maxCalory = 0,
      minCalory = 15000;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].calories < minCalory) {
        minCalory = arr[i].calories;
      }
      if (arr[i].calories > maxCalory) {
        maxCalory = arr[i].calories;
      }
    }
    return [minCalory, maxCalory];
  };

  //Filter max , min price from Array
  const maxMinPriceFilter = (arr) => {
    let maxPrice = 0,
      minPrice = 15000;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price < minPrice) {
        minPrice = arr[i].price;
      }
      if (arr[i].price > maxPrice) {
        maxPrice = arr[i].price;
      }
    }
    return [minPrice, maxPrice];
  };
  //Function of Filter Array By Brand Name
  function brandName(allBrand) {
    let localBrand = [];
    allBrand.forEach((element) => {
      if (localBrand.indexOf(element.brand) === -1) {
        localBrand.push(element.brand);
      }
    });

    return localBrand;
  }
  //Filter on Sale Product
  const filterSale = (e) => {
    let saleItems = [];
    if (e.target.checked) {
      saleItems = category.filter((item) => item.sale);
    } else {
      saleItems = [...allItems];
    }
    setCategory(saleItems);
  };
  //Filter By Brand Name
  function filterBrand(e) {
    let brandItem = [];

    if (e.target.value === 'All') {
      setCategory(allItems);
    } else {
      // eslint-disable-next-line array-callback-return
      brandItem = allItems.filter((element) => {
        if (element.brand === e.target.value) {
          return element;
        }
      });

      setCategory(brandItem);
    }
  }

  return (
    <dataApiContext.Provider
      value={{
        category,
        maxMinPrice,
        allItems,
        brandArray,
        getData,
        filterSale,
        setCategory,
        filterBrand,
        maxMinCalory,
      }}
    >
      {props.children}
    </dataApiContext.Provider>
  );
}
