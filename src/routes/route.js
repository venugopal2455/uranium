const express = require('express');
const router = express.Router();

const batchModel= require("../models/batchModel")
const devModel= require("../models/developerModel")

const devController=require("../controllers/devController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBatch", devController.createBatch)
router.post("/createDeveloper",devController.createDeveloper)
router.get("/scholarship",devController.scholarship)
router.get("/developers",devController.developers)
module.exports = router;