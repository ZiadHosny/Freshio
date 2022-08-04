import React , {useContext , useState}from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { dataApiContext } from '../../context/ApiContext';
import Slider from '@mui/material/Slider';
import { FormControl, Radio, RadioGroup } from '@mui/material';


export default function Drawer() {
    let params = window.location.pathname;
    let { filterSale , maxMinPrice , setCategory , allItems ,  brandArray , filterBrand} = useContext(dataApiContext);
    const [price,setPrice] = useState([1,8000]);
    let filterPrice=[];
    const updatePrice=((e,data)=>{
      filterPrice =  allItems.filter((item)=>{
       return item.price >= data[0] && item.price <= data[1]
      })
      setCategory(filterPrice);
       setPrice(data);
     })
    
  return (
    <div className='container-fluid'>
 <div style={{color:"#0a472e"}} className='row border my-3 rounded py-3'>
    <div className='rounded py-4'>
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
    </div>

    <div>
          <h5 className='text-capitalize' style={{ marginTop: 10, color: '#0a472e' }}>
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

<div>
          <h5 style={{ textAlign: 'center', color: '#0a472e' }}>Filter by price</h5>
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
