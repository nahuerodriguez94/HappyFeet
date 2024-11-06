const { Router } = require("express");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers.js");

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/", updateProduct);
router.delete("/", deleteProduct);

module.exports = router;
