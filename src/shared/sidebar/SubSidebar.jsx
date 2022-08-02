import React, { useContext} from 'react';
import "./Sidebar.scss";
import { subApiContext } from '../../context/SubCategoryContext';
import { ProSidebar, SidebarContent } from 'react-pro-sidebar';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormControl, Radio, RadioGroup } from '@mui/material';


function valuetext(value) {
  return `${value}°C`;
}

const SubSidebar = () => {

  const [value, setValue] = React.useState([20, 37]);
  const handleChange = ( newValue) => {
    setValue(newValue);
  };
  let params = window.location.pathname;
  let {filterSale,categoryKey,filterSubItem,filterByBrand} = useContext(subApiContext);



  return  (
  
  <ProSidebar breakPoint='sm' toggled="true" className='sideBar-bg'>
    <h2 className='text-center my-3'>{params.replace('/','')}</h2>
      <SidebarContent>
        <FormGroup>
        <h5 style={{marginTop:10 ,textAlign:"center",color:"#0a472e"}}>Filter By Sale</h5>
            <FormControlLabel style={{marginLeft:10}} onClick={filterSale} control={<Checkbox />} label='onSale' />
        </FormGroup>
      <div>
      <h5 style={{marginTop:10 ,textAlign:"center",color:"#0a472e"}}>{params.replace('/','')} Categories</h5>



      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onClick={filterSubItem} 
          defaultValue='All'
        >
          {
            categoryKey
            ?
              <>
               <FormControlLabel  style={{marginLeft:10}} value='All' control={<Radio />} label='All' />
               {
                 categoryKey.map((item,i)=>(
                   <FormControlLabel key={i} style={{marginLeft:10}} value={item} control={<Radio />} label={item} />
                 ))
               } 
              </>     
            :
            ''
          }
        </RadioGroup>
      </FormControl>
      </div>



      <div>
          <h5 style={{marginTop:10 ,textAlign:"center",color:"#0a472e"}}>Filter By Brand</h5>
        <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onClick={filterByBrand}
          defaultValue='All' 
        >
          <FormControlLabel  style={{marginLeft:10}} value="All" control={<Radio />} label="All" />
          <FormControlLabel  style={{marginLeft:10}} value="gourmet" control={<Radio />} label="gourmet" />
          <FormControlLabel  style={{marginLeft:10}} value="freshfood" control={<Radio />} label="Fresh-Food" />
          <FormControlLabel  style={{marginLeft:10}} value="keto-rockets" control={<Radio />} label="keto-Rockets" />
          <FormControlLabel  style={{marginLeft:10}} value="lowcarbcabana" control={<Radio />} label="Lowcarb-Cabana" />
          <FormControlLabel  style={{marginLeft:10}} value="maxmuscleelite" control={<Radio />} label="Max-Muscleelite" />
        </RadioGroup>
      </FormControl>
      </div>
      <hr/>
      <h5 style={{textAlign:"center" , color:"#0a472e"}}>Filter By Price</h5>
          <Box sx={{padding:3}}>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
          <Box sx={{padding:3}}>
          <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={20}
              marks
              min={10}
              max={6000}
            />

          </Box>
        </SidebarContent>
</ProSidebar>

  )
  
};
export default SubSidebar;