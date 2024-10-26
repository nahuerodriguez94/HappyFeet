const { Router } = require("express");
const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers.js");

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;