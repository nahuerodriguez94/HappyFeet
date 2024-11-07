const express = require("express");
const router = express.Router();
const { agregarMensaje } = require("../controllers/mensaje.controllers.js");

router.post("/", agregarMensaje);

module.exports = router;
