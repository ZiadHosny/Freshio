import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from '../assets/logo.svg';
import { BiSearchAlt } from 'react-icons/bi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button, Grid, Stack } from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';
import { TbMeat } from "react-icons/tb";
import { GiChickenOven } from "react-icons/gi";
import { GiAvocado } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";





const Navbar = ({ handleLoginClick, handleSignUpClick }) => {

  const handleClick = () => {
    handleLoginClick();
  };

  const handleSignUp = () => {
    handleSignUpClick();
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const open = Boolean(anchorEl);
  const handleClicks = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <div className="d-flex mb-4 justify-content-around align-items-center ">
        <div>
          <img src={logo} className="w-50" />
        </div>

        <div className="box pe-5">
          <input type="checkbox" id="check" />
          <div className="search-box">
            <input type="text" placeholder="Type here..." />
            <label for="check" className="icon">
              <BiSearchAlt />
            </label>
          </div>
        </div>

        <div className="d-flex">
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon style={{ color: '#0a472e', fontSize: 40, paddingRight: 10 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleClick}>
                <Typography className="loginicon">
                  Login
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleSignUp}>
                <Typography className="loginicon">
                  Sgin Up
                </Typography>
              </MenuItem>

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Cart">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                < ShoppingCartIcon style={{ color: '#0a472e', fontSize: 40, paddingRight: 10 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography onClick={handleClick} className="loginicon">
                  Login
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography onClick={handleSignUp} className="loginicon">
                  Sgin Up
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Favorites">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <FavoriteIcon style={{ color: '#0a472e', fontSize: 40 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography onClick={handleClick} className="loginicon">
                  Login
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography onClick={handleSignUp} className="loginicon">
                  Sgin Up
                </Typography>
              </MenuItem>

            </Menu>
          </Box>
        </div>
      </div>





       <AppBar position="static" maxWidth="lg">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box 
            
             sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>

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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", lg: "none" },

                }}
              >
                <MenuItem onClick={handleClose}><GiAvocado className="icon-style" />Keto</MenuItem>
                <MenuItem onClick={handleClose}><GiChickenOven className="icon-style" /> Chicken</MenuItem>
                <MenuItem onClick={handleClose}><GiTomato className="icon-style" /> Vegetables</MenuItem>
                <MenuItem onClick={handleClose}> <TbMeat className="icon-style" />Meat</MenuItem>
                <MenuItem onClick={handleClose}> <TbMeat className="icon-style" />Meat</MenuItem>
                <MenuItem onClick={handleClose}> <TbMeat className="icon-style" />Meat</MenuItem>
              </Menu>
            </Box>

      

            <Stack sx={{ display: { xs: "none", lg: "block" } }}>
              <div>
                <Button
                  style={{ color: "white" }}
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClicks}
                >
                  <ReorderIcon style={{ color: 'white', fontSize: 40, paddingRight: 10 }} /> Open Category
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
                    <MenuItem onClick={handleClose}><GiAvocado className="icon-style" />Keto</MenuItem>
                    <MenuItem onClick={handleClose}><GiChickenOven className="icon-style" /> Chicken</MenuItem>
                    <MenuItem onClick={handleClose}><GiTomato className="icon-style" /> Vegetables</MenuItem>
                    <MenuItem onClick={handleClose}> <TbMeat className="icon-style" />Meat</MenuItem>
                    <MenuItem onClick={handleClose}> <TbMeat className="icon-style" />Meat</MenuItem>
                    <MenuItem onClick={handleClose}> <TbMeat className="icon-style" />Meat</MenuItem>
                  </Menu>
              </div>
            </Stack>

            <Stack style={{marginLeft:40}} sx={{ display: { xs: "none", lg: "block" } }} direction="row" spacing={2} >
              <Button className="bt-style">Home</Button>
              <Button className="bt-style">Shop</Button>
              <Button className="bt-style">Page</Button>
              <Button className="bt-style">Bolg</Button>
              <Button className="bt-style">contact</Button>
            </Stack>


        






          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", lg: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              pointerEvents: "none"
            }}
          >
            Freshio
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              marginLeft: 50,
              display: { xs: "none", lg: "flex" },
            }}
          ></Box>

        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default Navbar;



