import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Grid2 } from "@mui/material";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link, useActionData } from "react-router-dom";
import { Sidebar } from "../Sidebar";




export const Navbar = () => {

  const [open, setOpen] = useState(false)

  function closeSidebar() {
    setOpen(!open)
  }


  return (
    <>
      <AppBar position="fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <Toolbar>
          <Typography variant="h6">
            <Button variant="text" color="default">
              <Link to={"/"}>
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{
                    width: "80px",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "50%",
                  }}
                />
              </Link>
            </Button>
          </Typography>
          {/* Menus */}
          <Grid2 container spacing={2} sx={{ ml: "auto", mr: 5 }}>
            <Button variant="text" color="default">
              <Link to={"/tienda"} style={{ color: "white", textDecoration: "none" }}>Tienda</Link>
            </Button>
            <Button variant="text" color="default">
              <Link to={"/contacto"} style={{ color: "white", textDecoration: "none" }}>Contacto</Link>
            </Button>
            <Button variant="text" color="default" onClick={closeSidebar}>
              <ShoppingCartTwoToneIcon />
            </Button>
            <Button variant="text" color="default">
              <PermIdentityTwoToneIcon />
            </Button>
          </Grid2>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} closeSidebar= {closeSidebar} />
    </>
  );
};
