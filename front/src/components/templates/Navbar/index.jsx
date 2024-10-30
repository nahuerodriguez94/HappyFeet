import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Grid2,
} from "@mui/material";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { FormLogin } from "../FormLogin";
import { FormLoginClient } from "../FormLoginClient";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";


export const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  

  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const toggleLogin = () => setOpenLogin(!openLogin);


  return (
    <>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to={"/"}>
              <img
                src="/logo.png"
                alt="Logo"
                style={{
                  width: "80px",
                  backgroundColor: "transparent",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Link>
          </Typography>
          <Grid2
            container
            spacing={2}
            sx={{ ml: "auto", mr: 5, alignItems: "center" }}
          >
            <Button variant="text" color="inherit">
              <Link
                to={"/tienda"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Tienda
              </Link>
            </Button>
            <Button variant="text" color="inherit">
              <Link
                to={"/contacto"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Contacto
              </Link>
            </Button>
            <Button variant="text" color="inherit" onClick={toggleSidebar}>
              <ShoppingCartTwoToneIcon />
            </Button>
            <Button variant="text" color="inherit">
              CLIENTE <PersonAddIcon />
            </Button>
            <Button variant="text" color="inherit" onClick={toggleLogin}>
             VENDEDOR <PermIdentityTwoToneIcon />
            </Button>
          </Grid2>
        </Toolbar>
      </AppBar>

      {/* Sidebar para el carrito */}
      <Sidebar open={openSidebar} closeSidebar={toggleSidebar} />

      {/* Drawer para el login */}
      <Drawer anchor="right" open={openLogin} onClose={toggleLogin}>
        <FormLogin setUser={() => setOpenLogin(false)} />
      </Drawer>
    </>
  );
};
