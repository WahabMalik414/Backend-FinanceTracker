const express = require("express");
const Product = require("../models/productModels.js");
const router = express.Router();
const productController = require("../controllers/productController.js");
const validateToken = require("../middleware/validateToken.js");
const validateCookie = require("../middleware/validateCookie.js");

router.get("/", productController.helloWorld);
router.get("/about", productController.about);
//CURD CREATE
router.post("/product", validateCookie, productController.createProduct);

//CURD READ
router.get("/products", validateCookie, productController.getProducts);

//CURD UPDATE
router.put("/product/:id", validateCookie, productController.updateProduct);

//CURD Delete
router.delete("/product/:id", validateCookie, productController.deleteProduct);

//CURD single product reading
router.post("/getProduct/:id", productController.getProduct);
module.exports = router;
