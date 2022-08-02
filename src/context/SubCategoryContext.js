import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';
export let subApiContext = createContext([]);
export default function SubCategoryContext(props) {
  const [subCategory, setSubCategory] = useState([]);
  const [categoryKey, setCategoryKey] = useState([]);
  const [allItems, setAllItems] = useState([]);

  let allCategory = [];
  let allProduct = [];
  let allKeys = [];

  async function getSubData(path) {
    if (path === '/') {
      let { data } = await axios.get(
        `https://healthy-food-ed8b5-default-rtdb.firebaseio.com/home.json`
      );
      setSubCategory(data);
    } else {
      let { data } = await axios.get(
        `https://healthy-food-ed8b5-default-rtdb.firebaseio.com/${path}.json`
      );

      allKeys = Object.keys(data);
      allCategory = Object.values(data);
      allCategory.forEach((item) => {
        allProduct.push(...item);
      });
      allProduct.sort(() => Math.random() - 0.5);
      setSubCategory(allProduct);
      setAllItems(allProduct);
      setCategoryKey([...allKeys]);
    }
  }

  const filterSale = (e) => {
    let saleItems = [];
    if (e.target.checked) {
      saleItems = subCategory.filter((item) => {
        if (item.sale) {
          return item;
        }
      });
    } else {
      saleItems = [...allItems];
    }
    setSubCategory(saleItems);
  };
  const filterSubItem = (e) => {
    let updatedSubItems = [];
    if (e.target.value === 'All') {
      setSubCategory(allItems);
    } else {
      updatedSubItems = allItems.filter((elem) => {
        return elem.category === e.target.value;
      });
      setSubCategory(updatedSubItems);
    }
  };

  const filterByBrand = (e) => {
    let filteredBrand = [];
    if (e.target.value === 'All') {
      setSubCategory(allItems);
    } else {
      filteredBrand = allItems.filter((elem) => {
        return elem.brand === e.target.value;
      });
      console.log(filteredBrand);
      setSubCategory(filteredBrand);
    }
  };

  return (
    <subApiContext.Provider
      value={{
        subCategory,
        getSubData,
        categoryKey,
        filterSale,
        filterSubItem,
        filterByBrand,
      }}
    >
      {props.children}
    </subApiContext.Provider>
  );
}
