const { Router } = require("express");
const { registrarUsuario } = require("../controllers/user.controllers.js");
const { isAdmin } = require("../middlewares/validacion.js");

const router = express.Router();

router.post("/registro", isAdmin, registrarUsuario);


module.exports= router;