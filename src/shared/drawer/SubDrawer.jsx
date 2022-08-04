import React, { useContext, useState } from 'react';
import { subApiContext } from '../../context/SubCategoryContext';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, Radio, RadioGroup } from '@mui/material';
import {Slider} from '@mui/material';

export default function Drawer() {
  let params = window.location.pathname;
  let { filterSale,maxMinPrice, categoryKey, filterSubItem,highToLowFilter, brandArray,setSubCategory,allItems , filterBrand} = useContext(subApiContext);
  const [price,setPrice] = useState([1,1000]);
  let filterPrice=[];
  const updatePrice=((e,data)=>{
   filterPrice =  allItems.filter((item)=>{
    return item.price >= data[0] && item.price <= data[1]
   })
   setSubCategory(filterPrice);
    setPrice(data);
  })
  return (
    <div className='container-fluid'>
    <div style={{color:"#0a472e"}} className='row py-3'>

      <div className='border rounded py-4'>
      <h2 className="text-center text-capitalize">{params.replace('/', '')}</h2>
      <FormGroup>
          <h5 style={{ marginTop: 10, color: '#0a472e' }}>
            Filter By Sale
          </h5>
          <FormControlLabel
            style={{ marginLeft: 10 }}
            onClick={filterSale}
            control={<Checkbox />}
            label="On Sale"
          />
        </FormGroup>

        <div>
          <h5 className='text-capitalize' style={{ marginTop: 10, color: '#0a472e' }}>
            {params.replace('/', '')} Categories
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


          <h5 className='text-capitalize' style={{ marginTop: 10, color: '#0a472e' }}>
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

          <div>
          <h5 style={{ marginTop: 10, color: '#0a472e' }}>
            Filter By price
          </h5>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onClick={highToLowFilter}
             
            >
              <FormControlLabel
                style={{ marginLeft: 10 }}
                value="highToLow"
                control={<Radio />}
                label="High To Low"
              />
              <FormControlLabel
                style={{ marginLeft: 10 }}
                value="lowToHigh"
                control={<Radio />}
                label="Low To High"
              />
            </RadioGroup>
          </FormControl>
        </div>
        </div>

            
        <div>
          <h5 style={{ color: '#0a472e' }}>Filter by price</h5>
          <div className="p-4">
             <Slider
             min={maxMinPrice[0]}
             max={maxMinPrice[1]}
             value={price}
             onChange={updatePrice}
             valueLabelDisplay="auto"
             />             
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
