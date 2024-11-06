const { Router } = require("express");
const {
  createClient,
  obtenerClientes,
} = require("../controllers/client.controllers");

const router = Router();

router.post("/", createClient); // Ruta para crear un cliente
router.get("/", obtenerClientes); // Ruta para obtener clientes

module.exports = router;


