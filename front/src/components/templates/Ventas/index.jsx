import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from "@mui/material";
import { getAllCarts } from "../../../Servicios/cart.services";  // Asegúrate de que `getAllCarts` esté bien importado

export const Ventas = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);  // Estado para manejar la carga

  // Función para obtener los datos al hacer clic en el botón
  const fetchSalesData = async () => {
    setLoading(true);  // Muestra el mensaje de carga
    try {
      const carts = await getAllCarts();  // Llama a la función que obtiene todos los carritos
      setSalesData(carts);  // Guarda los datos de ventas en el estado
    } catch (error) {
      console.error("Error al obtener los datos de ventas:", error);
    }
    setLoading(false);  // Oculta el mensaje de carga
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Typography variant="h4" gutterBottom>
        Ventas Registradas
      </Typography>

      <Button variant="contained" color="primary" onClick={fetchSalesData} style={{ marginBottom: 20 }}>
        Ver Ventas
      </Button>

      {loading ? (
        <Typography>Loading...</Typography>  // Muestra un mensaje de carga mientras obtienes los datos
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="sales table">
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
      )}
    </div>
  );
};
