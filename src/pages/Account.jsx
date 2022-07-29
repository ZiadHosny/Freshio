import React from 'react';
import "./auth/account.scss";

import { ProSidebar, Menu, MenuItem, SubMenu , SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import logo from '../assets/logo.svg';
import { GiChickenOven } from "react-icons/gi";
import { GiAvocado } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";
import {GiBananaBunch} from "react-icons/gi";
import {GiMedicinePills} from "react-icons/gi";
import {GiPopcorn} from "react-icons/gi";
import {GiSlicedBread} from "react-icons/gi";
import {GiCroissant} from "react-icons/gi";
import {GiCakeSlice} from "react-icons/gi";
import {AiFillStop} from "react-icons/ai";
import {FaLongArrowAltDown} from "react-icons/fa";
import {TbSoup} from "react-icons/tb";
import {GiBowlOfRice} from "react-icons/gi";
import {MdEmojiFoodBeverage} from "react-icons/md";
import {GiBroccoli} from "react-icons/gi";
import {TbCheese} from "react-icons/tb";
import { TbMeat } from 'react-icons/tb';
import {GiMeat} from "react-icons/gi";
import {GiSteak} from "react-icons/gi";


const Account = () => {

  return  (
  

    <ProSidebar breakPoint='sm' toggled="true" className='sideBar-bg'>
      <SidebarHeader>
    
      <img src={logo} className="w-50 mb-3 d-block m-auto" alt="logo" />
     
  </SidebarHeader>

  <Menu iconShape="circle">
    <MenuItem icon={<GiAvocado className='icon-bg '/>}>Keto</MenuItem>
    <MenuItem icon={<GiChickenOven className='icon-bg '/>}> Chicken</MenuItem>
    <MenuItem icon={<GiTomato className='icon-bg '/>}> Vegetables</MenuItem>
    <MenuItem icon={<GiBananaBunch className='icon-bg '/>}>Fruit</MenuItem>
    <MenuItem icon={<GiMedicinePills className='icon-bg '/>}>Supplements</MenuItem>
    <MenuItem icon={<GiPopcorn className='icon-bg '/>}>Snacks</MenuItem>
    <SubMenu icon={<GiSlicedBread className='icon-bg'/>} className='submenu' title="Bakery">
      <MenuItem icon={<GiCroissant className='icon-bg'/>}>Croissant</MenuItem>
      <MenuItem icon={<GiCakeSlice className='icon-bg'/>}>Cakes</MenuItem>
      <MenuItem icon={<AiFillStop className='icon-bg'/>}> No Gluten</MenuItem>
    </SubMenu>

    <SubMenu icon={<FaLongArrowAltDown className='icon-bg'/>} className='submenu' title="Low Carb">
    <MenuItem icon={<GiPopcorn className='icon-bg'/>}> Snacks</MenuItem>
      <MenuItem icon={<TbSoup className='icon-bg'/>}> Soup</MenuItem>
      <MenuItem icon={<GiBowlOfRice className='icon-bg'/>}>pasta</MenuItem>
      <MenuItem icon={<MdEmojiFoodBeverage className='icon-bg'/>}> Baverage</MenuItem>
    </SubMenu>

    <SubMenu icon={<GiBroccoli className='icon-bg'/>} className='submenu' title="Vegan">
    <MenuItem icon={<TbCheese className='icon-bg'/>}> Dairy</MenuItem>
      <MenuItem icon={<TbSoup className='icon-bg'/>}> Soup</MenuItem>
      <MenuItem icon={<GiBowlOfRice className='icon-bg'/>}>pasta</MenuItem>
      <MenuItem icon={<MdEmojiFoodBeverage className='icon-bg'/>}> Baverage</MenuItem>
    </SubMenu>


    <SubMenu icon={<TbMeat className='icon-bg'/>} className='submenu' title="Meat">
    <MenuItem icon={<GiSteak className='icon-bg'/>}> Beef</MenuItem>
      <MenuItem icon={<GiMeat className='icon-bg'/>}> Lamb</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>

  )
  
};
export default Account;