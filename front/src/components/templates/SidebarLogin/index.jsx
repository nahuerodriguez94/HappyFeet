import React, { useState } from "react";
import { Drawer, List, Button } from "@mui/material";
import { FormLogin } from "../FormLogin";
import { Home } from "../../pages/Home";

export const SidebarLogin = ({ open, closeSidebarLogin }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Drawer
        open={open}
        onClose={closeSidebarLogin}
        anchor="right"
        sx={{
          width: 240,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            overflowY: "auto",
          },
        }}
      >
        <List>
          {isAuthenticated ? (
            <>
              <Home />
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleLogout} 
                style={{ marginTop: "10px" }}
              >
                Cerrar sesión
              </Button>
            </>
          ) : (
            <>
              <FormLogin onLogin={handleLogin} />
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleLogin} 
                style={{ marginTop: "10px" }}
              >
                Iniciar sesión
              </Button>
            </>
          )}
        </List>
      </Drawer>
    </div>
  );
};
