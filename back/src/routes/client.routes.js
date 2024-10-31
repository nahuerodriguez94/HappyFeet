const { Router } = require("express");
const {
  createClient,
  obtenerClientes,
  updateClient,
} = require("../controllers/client.controllers");

const router = Router();

router.post("/", createClient);
router.get("/", obtenerClientes);

module.exports = router;
