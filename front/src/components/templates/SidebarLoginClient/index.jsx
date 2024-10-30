import React, { useState } from "react";
import { Drawer, List, Button } from "@mui/material";
import { Home } from "../../pages/Home";
import { FormLoginClient } from "../FormLoginClient";
import { RegistroCliente } from "../RegistroCliente";

export const SidebarLoginClient = ({ openLoginClient, closeSidebarLoginClient }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Estado para alternar entre login y registro

  const handleLoginClient = () => {
    setIsAuthenticated(true);
  };

  const handleLogoutClient = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("userClient");
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering); // Alterna entre login y registro
  };

  return (
    <div>
      <Drawer
        open={openLoginClient}
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
                onClick={handleLogoutClient} 
                style={{ marginTop: "10px" }}
              >
                Cerrar sesión
              </Button>
            </>
          ) : isRegistering ? (
            <>
              <RegistroCliente />
              <Button 
                variant="text" 
                color="primary" 
                onClick={toggleRegister} 
                style={{ marginTop: "10px" }}
              >
                ¿Ya tienes cuenta? Inicia sesión
              </Button>
            </>
          ) : (
            <>
              <FormLoginClient setUserClient={handleLoginClient} />
              <Button 
                variant="text" 
                color="primary" 
                onClick={toggleRegister} 
                style={{ marginTop: "10px" }}
              >
                Crear cuenta
              </Button>
            </>
          )}
        </List>
      </Drawer>
    </div>
  );
};
