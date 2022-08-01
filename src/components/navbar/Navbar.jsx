import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import { TbMeat } from 'react-icons/tb';
import {
  GiTomato,
  GiFruitTree,
  GiAvocado,
  GiChickenOven,
  GiStrongMan,
  GiSugarCane,
  GiBroccoli,
} from 'react-icons/gi';
import { MdFastfood, MdNoMealsOuline } from 'react-icons/md';
import MenuBar from './MenuBar';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const open = Boolean(anchorEl);
  const handleClicks = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuBar />
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', lg: 'none' },
                }}
              >
                <div className="row">
                  <div className="">
                    <MenuItem onClick={handleClose}>
                      <Link to="/keto" className="text-color ">
                        <GiAvocado className="icon-style" />
                        Keto
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/chicken" className="text-color">
                        <GiChickenOven className="icon-style" />
                        Chicken
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/vegetables" className="text-color">
                        <GiTomato className="icon-style" />
                        Vegetables
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/meals" className="text-color">
                        <MdNoMealsOuline className="icon-style" />
                        Meals
                      </Link>
                    </MenuItem>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="">
                    <MenuItem onClick={handleClose}>
                      <Link to="/snacks" className="text-color">
                        <MdFastfood className="icon-style" />
                        Snacks
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/fruits" className="text-color">
                        <GiFruitTree className="icon-style" />
                        Fruits
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/meat" className="text-color">
                        <GiBroccoli className="icon-style" />
                        Meat
                      </Link>
                    </MenuItem>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="">
                    <MenuItem onClick={handleClose}>
                      <Link to="/vegan" className="text-color">
                        <GiBroccoli className="icon-style" />
                        Vegan
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/lowcarb" className="text-color">
                        <GiSugarCane className="icon-style" />
                        Low Carb
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/supplements" className="text-color">
                        <GiStrongMan className="icon-style" />
                        Supplements
                      </Link>
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            </Box>

            <Stack sx={{ display: { xs: 'none', lg: 'block' } }}>
              <div>
                <Button
                  style={{ color: 'white' }}
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClicks}
                >
                  <ReorderIcon
                    style={{ color: 'white', fontSize: 40, paddingRight: 10 }}
                  />{' '}
                  Open Category
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <div className="row p-3">
                    <div className="col-md-4">
                      <div className="">
                        <MenuItem onClick={handleClose}>
                          <Link to="/keto" className="text-color ">
                            <GiAvocado className="icon-style" />
                            Keto
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/chicken" className="text-color">
                            <GiChickenOven className="icon-style" />
                            Chicken
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/vegetables" className="text-color">
                            <GiTomato className="icon-style" />
                            Vegetables
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/meals" className="text-color">
                            <MdNoMealsOuline className="icon-style" />
                            Meals
                          </Link>
                        </MenuItem>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="">
                        <MenuItem onClick={handleClose}>
                          <Link to="/snacks" className="text-color">
                            <MdFastfood className="icon-style" />
                            Snacks
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/fruits" className="text-color">
                            <GiFruitTree className="icon-style" />
                            Fruits
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/meat" className="text-color">
                            <GiBroccoli className="icon-style" />
                            Meat
                          </Link>
                        </MenuItem>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="">
                        <MenuItem onClick={handleClose}>
                          <Link to="/vegan" className="text-color">
                            <GiBroccoli className="icon-style" />
                            Vegan
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/lowcarb" className="text-color">
                            <GiSugarCane className="icon-style" />
                            Low Carb
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/supplements" className="text-color">
                            <GiStrongMan className="icon-style" />
                            Supplements
                          </Link>
                        </MenuItem>
                      </div>
                    </div>
                  </div>
                </Menu>
              </div>
            </Stack>

            <Stack
              style={{ marginLeft: 'auto' }}
              sx={{ display: { xs: 'none', lg: 'block' } }}
              direction="row"
              spacing={2}
            >
              <Link to="/home" className="bt-style">
                Home
              </Link>
              <Link to="/shop" className="bt-style">
                Shop
              </Link>
              <Link to="/page" className="bt-style">
                Page
              </Link>
              <Link to="/blog" className="bt-style">
                Bolg
              </Link>
              <Link to="/contact" className="bt-style">
                Contact
              </Link>
            </Stack>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', lg: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                pointerEvents: 'none',
              }}
            >
              Freshio
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
