const registrarUsuario = (req, res) => {
  const body = req.body;

  if (body.password.length <= 3) {
    res
      .status(400)
      .json({
        status: "error",
        message: "La contraseña debe tener al menos 4 digitos",
      });
  } else {
    res.status(201).json({ status: "success", message: "Registro Exitoso" });
  }
};


module.exports = { registrarUsuario };

