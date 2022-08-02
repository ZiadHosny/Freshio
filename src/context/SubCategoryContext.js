import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';
export let subApiContext = createContext([]);
export default function SubCategoryContext(props) {
  const [subCategory, setSubCategory] = useState([]);
  const [categoryKey, setCategoryKey] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [maxMinPrice, setMaxMinPrice] = useState([]);

  let allCategory = [];
  let allProduct = [];
  let allKeys = [];
  let price = [];

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
      price=maxMinPriceFilter(allProduct);
      setMaxMinPrice(price);
    }
  }

  //Filter max , min price from Array
  const maxMinPriceFilter=(arr)=>
  {
    let priceArray = [];
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
    priceArray.push(minPrice);
    priceArray.push(maxPrice);
    return priceArray;
  }
  //Filter Array From High to low Price or viceversa
  const highToLowBubbleSort=(arr)=>{
    let swapped;
   
      do{
        swapped = true;
        
        for (let i = 0; i < arr.length-1; i++) {
              if((arr[i].price<arr[i+1].price))
                {
                  let temp = arr[i];
                  arr[i]=arr[i+1];
                  arr[i+1]=temp;
                  swapped=false;
                } 
                
        }
        
      }
      while(!swapped); 
     return arr;
  }
  const lowToHighBubbleSort=(arr)=>{
    let swapped;
    do{
      swapped = true; 
      for (let i = 0; i < arr.length-1; i++) {
            if((arr[i].price > arr[i+1].price))
              {
                let temp = arr[i+1];
                arr[i+1]=arr[i];
                arr[i]=temp;
                swapped=false;
              } 
      }
    }
    while(!swapped);
    
  }

  const highToLowFilter=(e)=>{
    if(e.target.value === 'highToLow'){
      setSubCategory(highToLowBubbleSort(subCategory));
    }
    else
    {
      setSubCategory(lowToHighBubbleSort(subCategory));
    }
  
  }

  //Filter on Sale Product
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

  //Filter Category by its SubCategory
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


  return (
    <subApiContext.Provider
      value={{
        subCategory,
        getSubData,
        categoryKey,
        filterSale,
        filterSubItem,
        highToLowFilter,maxMinPrice,setSubCategory,allItems
      }}
    >
      {props.children}
    </subApiContext.Provider>
  );
}
