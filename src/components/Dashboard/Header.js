import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../../Assets/Images/The Arch Interior.svg";
import "../../CSS/DashboardComponent.css";
import Box from "@mui/material/Box";

const Header = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar sx={{ background: "#000000" }}>
      <div className="logo">
        <img src={logo} alt width={800} height={70}></img>
      </div>
      <div className="logotext"></div>

      <div className="tabs">
        <Box sx={{ width: "100%" }}>
          <Tabs
            centered
            value={value}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#FFFFFF",
              },
            }}
            onChange={handleChange}
            textColor="inherit"
            // indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
            <Tab value="four" label="Item four" />
            <Tab value="five" label="Item five" />
          </Tabs>
        </Box>
      </div>
    </AppBar>
  );
};

export default Header;
