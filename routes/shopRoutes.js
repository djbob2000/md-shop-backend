const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

router.post("/:shopId/products", shopController.createProduct);

router.get("/:shopId/products", shopController.getProducts);

module.exports = router;
