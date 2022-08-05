import React, { useContext, useState } from 'react';
import { subApiContext } from '../../context/SubCategoryContext';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, Radio, RadioGroup } from '@mui/material';
import {Slider} from '@mui/material';

export default function Drawer() {
  let params = window.location.pathname;
  let { filterSale,maxMinPrice, categoryKey, filterSubItem, brandArray,setSubCategory,allItems , filterBrand , maxMinCalory} = useContext(subApiContext);
  const [price,setPrice] = useState([1,8000]);
  let filterPrice=[];
  const searchPrice=((e,data)=>{
    filterPrice =  allItems.filter((item)=>{
      return item.price >= data[0] && item.price <= data[1]
    })
    setSubCategory(filterPrice);
    setPrice(data);
  })
  const [calories,setCalories] = useState([1,8000]);
  let filterCalories=[];
  const searchCalories=((e,data)=>{
    filterCalories=allItems.filter((item)=>{
      return item.calories >=data[0] && item.calories <= data[1]
    })
    setSubCategory(filterCalories);
    setCalories(data);
  })
  return (
    <div className='container-fluid'>
    <div style={{color:"#0a472e"}} className='row py-3'>

      <div className='border rounded py-4'>
      <h2 className="text-capitalize my-3">{params.replace('/', '')} Category</h2>
      <hr />
      <div>
        <FormGroup>
            <h5 className='my-3' style={{ color: '#0a472e' }}>
              onSale Product
            </h5>
            <FormControlLabel
              style={{ marginLeft: 10 }}
              onClick={filterSale}
              control={<Checkbox />}
              label="On Sale"
            />
        </FormGroup>
        <hr />
      </div>


      <div>
          <h5 className='text-capitalize my-4' style={{ color: '#0a472e' }}>
            {params.replace('/', '')} SubCategories
          </h5>
          
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onClick={filterSubItem}
              defaultValue="All"
            >
              {categoryKey ? (
                <>
                  <FormControlLabel
                    style={{ marginLeft: 10 }}
                    value="All"
                    control={<Radio />}
                    label="All"
                  />
                  {categoryKey.map((item, i) => (
                    <FormControlLabel
                      key={i}
                      style={{ marginLeft: 10 }}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </>
              ) : (
                ''
              )}
            </RadioGroup>
          </FormControl>
          <hr />
      </div>

      <div>
          <h5 className='my-4' style={{ color: '#0a472e' }}>Price Filter</h5>
          <h6 className=''>Range : EGP {maxMinPrice[0]} - {maxMinPrice[1]}</h6>
          <div className="p-3">
             <Slider
             min={maxMinPrice[0]}
             max={maxMinPrice[1]}
             value={price}
             onChange={searchPrice}
             valueLabelDisplay="auto"
             />            
          </div>
          <hr />
      </div>

      <div>
          <h5 className='my-4' style={{ color: '#0a472e' }}>Filter by Calories</h5>
          <h6 className=''>Range : Kcal {maxMinCalory[0]} - {maxMinPrice[1]}</h6>
          <div className="p-4">
             <Slider
             min={maxMinCalory[0]}
             max={maxMinCalory[1]}
             value={calories}
             onChange={searchCalories}
             valueLabelDisplay="auto"
             />            
          </div>
          <hr />
        </div>


      <div>
      <h5 className='text-capitalize my-4' style={{color: '#0a472e' }}>
            {params.replace('/', '')} Brand
          </h5>

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onClick={filterBrand}
              defaultValue="All"
            >
              {brandArray.length > 1 ? (
                <>
                  <FormControlLabel
                    style={{ marginLeft: 10 }}
                    value="All"
                    control={<Radio />}
                    label="All"
                  />
                  { brandArray.map((item, i) => (
                    <FormControlLabel
                      key={i}
                      style={{ marginLeft: 10 }}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </>
              ) : (
                <FormControlLabel
                      style={{ marginLeft: 10 }}
                      value={brandArray[0]}
                      control={<Radio />}
                      label={brandArray[0]}
                    />
              )}
            </RadioGroup>
          </FormControl>
          <hr />
      </div>

      
      


            
       

      </div>
    </div>
  </div>
  )
}
