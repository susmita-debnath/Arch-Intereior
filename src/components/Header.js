
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React from 'react';
import logo from "../Assets/Images/The Arch Interior.svg";
import "../CSS/Header.css";
import Box from '@mui/material/Box';


const Header = () => {
  return (
    <div className='Header'>
        <AppBar sx={{ background: "#000000"}}> 
        <div className="logo">
          
          <img src={logo} alt width={800} height={70}>
          </img>
        </div>
        <div className='logotext'>
          </div>

          <Box sx={{ width: '100%' }}>
      <Tabs
       centered
        // value={value}
        // onChange={handleChange}
        textColor="#FFFFFF"
        indicatorColor="#FF000"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Products" />
        <Tab value="two" label="Collection" />
        <Tab value="three" label="About" />
        <Tab value="four" label="Heritage" />
        <Tab value="five" label="About Us" />

      </Tabs>
    </Box>
        </AppBar>
    </div>
  );
};


export default Header;