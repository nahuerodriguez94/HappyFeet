const { Router } = require("express");
const { getCart, createCart } = require("../controllers/cart.controllers.js");

const router = Router();

router.get("/", getCart);
router.post("/", createCart);

module.exports = router;
