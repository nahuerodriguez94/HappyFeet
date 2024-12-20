require("dotenv").config();
const clientRouter = require("./routes/client.routes.js");
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const { sequelize } = require("./db/db.js");
const productRoutes = require("./routes/product.routes.js");
const cartRoutes = require("./routes/cart.routes.js");
const userRoutes = require("./routes/userRoutes.js");
const bodyParser = require("body-parser");
const contactoRoutes = require("./routes/contactoRoutes.js");


const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log("Server UP"));

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors({ origin: 'http://localhost:5173' }));
app.use("/", express.static('public'))
app.use(bodyParser.json());

// Sincronizacion con DB 
const connection = async () => {
    try {
      await sequelize.sync();
    } catch (error) {
      console.log("Ocurrio un error al conectarse a la DB / ERROR: ", error.message);
    }
  };
  
connection();


//Router
app.use("/cliente", clientRouter);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/user", userRoutes);
app.use("/contacto", contactoRoutes);

