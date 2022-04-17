const express = require('express');
const router = express.Router();

const authorModel= require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishModel=require("../models/publishModel")
const newController=require("../controllers/newController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", newController.createAuthor)
router.post("/createPublisher",newController.createPublisher)
router.post("/createMixBook",newController.createNewBook)
router.get("/getNewBooks",newController.getBookData)
router.put("/putUpdate",newController.putUpdate)
router.put("/updatePrice",newController.updatePrice)
module.exports = router;