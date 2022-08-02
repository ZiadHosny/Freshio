import React, { useContext, useState } from 'react';
import './Sidebar.scss';
import { subApiContext } from '../../context/SubCategoryContext';
import { ProSidebar, SidebarContent } from 'react-pro-sidebar';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, Radio, RadioGroup } from '@mui/material';
import {Slider} from '@mui/material';






const SubSidebar = () => {
  let params = window.location.pathname;
  let { filterSale, categoryKey, filterSubItem,highToLowFilter,maxMinPrice,subCategory,setSubCategory,allItems } = useContext(subApiContext);
  const [price,setPrice] = useState([1,100])
  let step=20;
  let filterPrice=[];
  const updatePrice=((e,data)=>{
   filterPrice =  allItems.filter((item)=>{
    return item.price >= data[0] && item.price <= data[1]
   })
   setSubCategory(filterPrice);
    setPrice(data);
  })
 

  return (
    <ProSidebar breakPoint="sm" toggled="true" className="sideBar-bg">
      <h2 className="text-center my-3">{params.replace('/', '')}</h2>
      <SidebarContent>
        <FormGroup>
          <h5 style={{ marginTop: 10, textAlign: 'center', color: '#0a472e' }}>
            Filter By Sale
          </h5>
          <FormControlLabel
            style={{ marginLeft: 10 }}
            onClick={filterSale}
            control={<Checkbox />}
            label="onSale"
          />
        </FormGroup>
        <div>
          <h5 style={{ marginTop: 10, textAlign: 'center', color: '#0a472e' }}>
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
        </div>

        <div>
          <h5 style={{ marginTop: 10, textAlign: 'center', color: '#0a472e' }}>
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
                label="highToLow"
              />
              <FormControlLabel
                style={{ marginLeft: 10 }}
                value="lowToHigh"
                control={<Radio />}
                label="lowToHigh"
              />
            </RadioGroup>
          </FormControl>
        </div>
          
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

      </SidebarContent>
    </ProSidebar>
  );
};
export default SubSidebar;
