// middlewares/validateClient.js
const validateClientData = (req, res, next) => {
    const { username, email, phone, address, city } = req.body;
  
    // Validación de campos requeridos
    if (!username || !email || !address || !city ) {
      return res.status(400).json({
        status: "failure",
        message: "Faltan campos obligatorios",
      });
    }
  
    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: "failure",
        message: "El formato del email es inválido",
      });
    }
  
    // Validación de número de teléfono
    if (phone && (!/^\d{10}$/.test(phone))) {
      return res.status(400).json({
        status: "failure",
        message: "El número de teléfono debe tener 10 dígitos",
      });
    }
    
    next();
  };
  
  module.exports = { validateClientData };
  