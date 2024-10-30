require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const ticketRouter = require("./routes/ticket.routes.js");
const { sequelize } = require("./db/db.js");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log("Server UP"));

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors({ origin: 'http://localhost:5173' }));

// Sincronizacion con DB 
const connection = async () => {
    try {
      await sequelize.sync({force: true});
    } catch (error) {
      console.log("Ocurrio un error al conectarse a la DB / ERROR: ", error.message);
    }
  };
  
connection();


//Router

app.use("/ticket", ticketRouter);

