import React from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';
export let subApiContext = createContext([]);
export default function SubCategoryContext(props) {
  const [subCategory, setSubCategory] = useState([]);
  const [categoryKey, setCategoryKey] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [maxMinPrice, setMaxMinPrice] = useState([]);
  const [maxMinCalory, setMaxMinCalory] = useState([]);
  const [brandArray , setBrandArray] = useState([]);

  let allCategory = [];
  let allProduct = [];
  let allKeys = [];
  let price = [];
  let calories=[];
  let brand ;

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
      calories=maxMinCaloryFilter(allProduct);
      setMaxMinCalory(calories);
      brand = brandName(allProduct);
      setBrandArray(brand)
    }
  }

  //Filter max , min Calories from Array
  const maxMinCaloryFilter=(arr)=>{
    let maxCalory=0,minCalory=15000;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].calories<minCalory)
      {
        minCalory=arr[i].calories;
      } 
      if(arr[i].calories>maxCalory)
      {
        maxCalory=arr[i].calories;
      } 
    }
    return [minCalory,maxCalory];
  }

  //Filter max , min price from Array
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


//Function of Filter Array By Brand Name
  function brandName(allBrand){
    let localBrand = [];
    allBrand.forEach((element)=>{
      if(localBrand.indexOf(element.brand) === -1 ) {
        localBrand.push(element.brand);
      }
    })

    return localBrand
  }

//Filter By Brand Name
  function filterBrand (e) {
    let brandItem = [];
 
    if(e.target.value === "All") {

      setSubCategory(allItems)


    }

    else {
      brandItem = allItems.filter((element)=>{

        if( element.brand == e.target.value ) 
        {
          return element
        }
    
      })
     
      setSubCategory(brandItem)

    }
   
  }
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
        brandArray,
        maxMinPrice,
        allItems,
        categoryKey,
        getSubData,
        filterSale,
        filterSubItem,
        filterBrand,
        highToLowFilter,setSubCategory,maxMinCalory
      }}
    >
      {props.children}
    </subApiContext.Provider>
  );
}
