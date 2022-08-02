import React from 'react';
import "./Sidebar.scss";
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import logo from '../../assets/logo.svg';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormControl, Radio, RadioGroup } from '@mui/material';


function valuetext(value) {
  return `${value}°C`;
}

const Sidebar = () => {

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return  (
  
  <ProSidebar breakPoint='sm' toggled="true" className='sideBar-bg'>
      <SidebarHeader>
    
      <img src={logo} className="w-50 mb-3 d-block m-auto" alt="logo" />
     
      </SidebarHeader>
      <SidebarContent>
        <FormGroup>
        <h5 style={{marginTop:10 ,textAlign:"center",color:"#0a472e"}}>Filter By Sale</h5>
            <FormControlLabel style={{marginLeft:10}} control={<Checkbox />} label='onSale' />
        </FormGroup>
      <hr/>
      <div>
          <h5 style={{marginTop:10 ,textAlign:"center",color:"#0a472e"}}>Filter By Brand</h5>
        <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel  style={{marginLeft:10}} value="gourmet" control={<Radio />} label="gourmet" />
          <FormControlLabel  style={{marginLeft:10}} value="freshfood" control={<Radio />} label="freshfood" />
          <FormControlLabel  style={{marginLeft:10}} value="keto-rockets" control={<Radio />} label="keto-rockets" />
          <FormControlLabel  style={{marginLeft:10}} value="lowcarbcabana" control={<Radio />} label="lowcarbcabana" />
          <FormControlLabel  style={{marginLeft:10}} value="maxmuscleelite" control={<Radio />} label="maxmuscleelite" />
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
        </SidebarContent>
</ProSidebar>

  )
  
};
export default Sidebar;