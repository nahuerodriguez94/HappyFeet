import React, { useContext, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { FormLogin } from "../FormLogin";
import { FormLoginClient } from "../FormLoginClient";
import { CartContext } from "../../../Servicios/CartContext/CartContext";
import { Link } from "react-router-dom";
import { createCart, getAllCarts } from "../../../Servicios/cart.services"; // Importar `getAllCarts`

export const Navbar = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openLoginClient, setOpenLoginClient] = useState(false);
  const [openSales, setOpenSales] = useState(false);  // Estado para el panel de ventas
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
  const [salesData, setSalesData] = useState([]); // Datos de ventas
  const [username, setUsername] = useState("Invitado");

  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const toggleLogin = () => setOpenLogin(!openLogin);
  const toggleLoginClient = () => setOpenLoginClient(!openLoginClient);
  const toggleSales = () => setOpenSales(!openSales);  // Función para abrir/cerrar ventas

  // Leer 'username' desde localStorage
  useEffect(() => {
    const userClient = localStorage.getItem("userClient");
    if (userClient) {
      const parsedUser = JSON.parse(userClient);
      setUsername(parsedUser.username || "Invitado");
    }
  }, []);

  // Manejar el inicio de sesión
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setOpenLogin(false);
  };

  const handlePayment = async () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío. Agrega productos para continuar.");
      return;
    }

    const cartData = {
      clientName: username,
      products: cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount: getTotalAmount(),
    };

    try {
      await createCart(cartData);
      alert("Gracias por su compra. Su carrito ha sido guardado.");
    } catch (error) {
      console.error("Error al procesar el pago:", error.response?.data || error.message);
      alert("Ocurrió un error al procesar el pago. Intenta de nuevo.");
    }
  };

  // Función para obtener todas las ventas
  const fetchSalesData = async () => {
    try {
      const carts = await getAllCarts();
      setSalesData(carts);
    } catch (error) {
      console.error("Error al obtener los datos de ventas:", error);
    }
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
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
              }}
            />
          </Link>
        </Typography>

        <Button variant="text" color="inherit">
          <Link to={"/tienda"} style={{ color: "white", textDecoration: "none" }}>
            Tienda
          </Link>
        </Button>
        <Button variant="text" color="inherit">
          <Link to={"/contacto"} style={{ color: "white", textDecoration: "none" }}>
            Contacto
          </Link>
        </Button>
        <Button variant="text" color="inherit" onClick={toggleLoginClient}>
          LOG CLIENTE <PersonAddIcon />
        </Button>

        <Button variant="text" color="inherit" onClick={toggleSidebar}>
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartTwoToneIcon />
          </Badge>
        </Button>
        <Button variant="text" color="inherit" onClick={toggleLogin}>
          LOG VENDEDOR <PermIdentityTwoToneIcon />
        </Button>

        {/* Mostrar el botón "Ventas" solo si está autenticado */}
        {isAuthenticated && (
          <Button variant="contained" color="secondary" onClick={() => {
            fetchSalesData();
            toggleSales();
          }}>
            Ventas
          </Button>
        )}
      </Toolbar>

      <Drawer
        open={openSidebar}
        onClose={toggleSidebar}
        sx={{
          width: 480,
          "& .MuiDrawer-paper": {
            width: 480,
          },
        }}
        anchor="right"
      >
        {/* Contenido del carrito */}
        <Typography variant="h6" sx={{ padding: 2 }}>Carrito</Typography>
        {cartItems.length > 0 ? (
          <>
            <Typography sx={{ padding: 2 }}>
              Cliente: {username}
            </Typography>

            <TableContainer component={Paper} sx={{ padding: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <img src={item.image} alt={item.name} style={{ width: "50px", marginRight: "10px" }} />
                        {item.name}
                      </TableCell>
                      <TableCell>U$S {item.price}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>U$S {(item.price * item.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} align="right">
                      <Typography variant="h6">Total:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">U$S {getTotalAmount().toFixed(2)}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePayment}
                sx={{ margin: 2 }}
              >
                Pagar
              </Button>
            </TableContainer>
          </>
        ) : (
          <Typography sx={{ padding: 2 }}>El carrito está vacío.</Typography>
        )}
      </Drawer>

      {/* Panel de Ventas */}
      <Drawer
        open={openSales}
        onClose={toggleSales}
        anchor="right"
      >
        <Typography variant="h6" sx={{ padding: 2 }}>Ventas Registradas</Typography>
        <TableContainer component={Paper} sx={{ padding: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ticket</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Productos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesData.map((sale) => (
                <TableRow key={sale.ticketNumber}>
                  <TableCell>{sale.ticketNumber}</TableCell>
                  <TableCell>{sale.clientName}</TableCell>
                  <TableCell>{sale.totalAmount.toFixed(2)} U$S</TableCell>
                  <TableCell>
                    <ul>
                      {sale.products.map((product, index) => (
                        <li key={index}>
                          {product.name} x {product.quantity} - U$S {product.price}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Drawer>

      <Drawer
        sx={{
          width: 480,
          "& .MuiDrawer-paper": {
            width: 480,
          },
        }}
        anchor="right"
        open={openLogin}
        onClose={toggleLogin}
      >
        <FormLogin setUser={handleLoginSuccess} />
      </Drawer>

      <Drawer
        sx={{
          width: 480,
          "& .MuiDrawer-paper": {
            width: 480,
          },
        }}
        anchor="right"
        open={openLoginClient}
        onClose={toggleLoginClient}
      >
        <FormLoginClient setUserClient={() => setOpenLoginClient(false)} />
      </Drawer>
    </AppBar>
  );
};
