
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React from 'react';
import "../CSS/Header.css"
import logo from "../Assets/Images/Arch_logo.png"

const Header = () => {
  return (
    <div className='Header'>
        <AppBar sx={{ background: "#000000"}}> 
        <div className="logo">
          
          <img src={logo} alt width={70} height={70}>
          </img>
        </div>
        <div className='logotext'>
          <Typography>
            The Arch Interior
          </Typography>

        </div>
            <Toolbar>
              <Tabs sx={{margin: "auto"}} textColor="#FFFFFF">
               
                <Tab label= "Project"/>
                <Tab label= "People"/>
                <Tab label= "Expertise"/>
                <Tab label= "About Us"/>
                <Tab label= "Insights"/>


               

              </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  );
};


export default Header;