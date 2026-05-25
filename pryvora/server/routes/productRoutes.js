const express = require("express");

const router = express.Router();

const {

  getProducts

} = require("../controllers/productController");

/* ROUTE */

router.get("/",getProducts);

module.exports = router;