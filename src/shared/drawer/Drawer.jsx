import React , {useContext , useState}from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { dataApiContext } from '../../context/ApiContext';
import Slider from '@mui/material/Slider';
import { FormControl, Radio, RadioGroup } from '@mui/material';


export default function Drawer() {
    let params = window.location.pathname;
    let { filterSale , maxMinPrice , setCategory , allItems ,  brandArray , filterBrand,maxMinCalory} = useContext(dataApiContext);
    const [price,setPrice] = useState([1,9000]);
    let filterPrice=[];
    const updatePrice=((e,data)=>{
      filterPrice =  allItems.filter((item)=>{
       return item.price >= data[0] && item.price <= data[1]
      })
      setCategory(filterPrice);
       setPrice(data);
     })

     const [calories,setCalories] = useState([1,8000]);
     let filterCalories=[];
     const searchCalories=((e,data)=>{
       filterCalories=allItems.filter((item)=>{
         return item.calories >=data[0] && item.calories <= data[1]
       })
       setCategory(filterCalories);
       setCalories(data);
     })
    
  return (
<div className='container-fluid'>
 <div style={{color:"#0a472e"}} className='row border my-3 rounded py-3'>

    <div className='rounded py-4'>
    <h2 className="text-capitalize">{params.replace('/', '')} Category</h2>
    <hr />
    </div>
    <div>
    <FormGroup>
          <h5 className='mb-4' style={{  color: '#0a472e' }}>
            onSale Products
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
    <div >
    <h5 className='my-4' style={{ color: '#0a472e' }}>Price Filter</h5>
    <div>
    <h6 className='my-3'>Range : EGP {maxMinPrice[0]} - {maxMinPrice[1]}</h6>
    <div className="p-3">
      <Slider
      min={maxMinPrice[0]}
      max={maxMinPrice[1]}
      value={price}
      onChange={updatePrice}
      valueLabelDisplay="auto"
      />

    </div>
    </div>
    <hr />
    </div>

    <div>
    <h5 className='my-4' style={{ color: '#0a472e' }}>Calories Filter</h5>
    <h6 className='my-3'>Range : Kcal {maxMinCalory[0]} - {maxMinCalory[1]}</h6>
    <div className="p-3">
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
    <h5 className='text-capitalize my-3' style={{  color: '#0a472e' }}>
            {params.replace('/', '')} Brand
          </h5>

          <FormControl>
              <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              defaultValue="All"
              onChange={filterBrand}
            >
              {brandArray.length > 1 ? (
                <>
                  <FormControlLabel
                    style={{ marginLeft: 10 }}
                    value="All"
                    control={<Radio />}
                    label="All"
                  />
                  {brandArray.map((item, i) => (
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
    
  )
}
