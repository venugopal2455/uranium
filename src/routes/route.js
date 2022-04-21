const express = require('express');
const router = express.Router();
const controller = require("../controllers/Controller")
const mid = require("../middleware/middleware")

router.post("/createProduct", controller.createProduct)

router.post("/createUser", controller.createUser)

// router.post("/createOrder", mid.mid1, controller.createOrder)

module.exports = router;