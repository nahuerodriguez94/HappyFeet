// controllers/CartController.js
const { Cart } = require("../models/cart.model.js");

// Obtener carrito del cliente
const getCart = async (req, res) => {
  try {
    const { clientName } = req.body;

    if (!clientName) {
      return res.status(401).json({ message: "Usuario no logueado" });
    }

    const cart = await Cart.findOne({ where: { clientName } });

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el carrito" });
  }
};

// Crear o actualizar carrito
const createCart = async (req, res) => {
  try {
    const { clientName, products } = req.body;

    if (!clientName) {
      return res.status(401).json({ message: "Usuario no logueado" });
    }

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "Debe agregar productos al carrito" });
    }

    let cart = await Cart.findOne({ where: { clientName } });

    if (!cart) {
      cart = await Cart.create({
        clientName,
        products,
        totalAmount: calculateTotalAmount(products),
        ticketNumber: generateTicketNumber(),
      });
    } else {
      cart.products = products;
      cart.totalAmount = calculateTotalAmount(products);
      await cart.save();
    }

    res.json({ message: "Carrito actualizado", cart });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el carrito" });
  }
};

// Función para calcular el total del carrito
const calculateTotalAmount = (products) => {
  return products.reduce((total, product) => total + product.price * product.quantity, 0);
};

// Función para generar un número de ticket único
const generateTicketNumber = () => {
  return `TICKET-${Date.now()}`;
};

module.exports = { getCart, createCart };