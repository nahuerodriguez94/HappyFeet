import React, { useState } from "react";
import { Drawer, List, Button } from "@mui/material";
import { Home } from "../../pages/Home";
import { FormLoginClient } from "../FormLoginClient";

export const SidebarLoginClient = ({ open, closeSidebarLoginClient }) => {
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
        onClose={closeSidebarLoginClient}
        anchor="right"
        sx={{
          width: 240,
          "& .MuiDrawer-paper": {
            width: 240,
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
              <FormLoginClient onLogin={handleLogin} />
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
