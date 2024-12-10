"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, List, ListItem, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { name: "Home", target: "home" },
  { name: "About", target: "about" },
  { name: "Contact", target: "contact" },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false); // Close drawer if open
  };

  const list = () => (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center">
      <IconButton onClick={toggleDrawer(false)} edge="start" color="inherit" className="absolute top-2 right-2">
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component="li"
            onClick={() => handleScroll(item.target)}
            className="w-full cursor-pointer"
          >
            <Typography variant="h6" className="text-center text-lg text-brown">
              {item.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static" className="bg-cream shadow-none">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-brown text-sm">
          Abhishek Srivastava
        </Typography>
        <IconButton
          edge="start"
          onClick={toggleDrawer(true)}
          className="md:hidden"
          sx={{ color: "brown" }}
        >
          <MenuIcon />
        </IconButton>
        <List className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <ListItem
              key={item.name}
              onClick={() => handleScroll(item.target)}
              className="cursor-pointer"
            >
              <Typography variant="body1" className="text-sm text-brown">
                {item.name}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { width: "100%", height: "100%" } }}
      >
        {list()}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
