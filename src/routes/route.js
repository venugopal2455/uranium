const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/NewBook", UserController.createBook  )
router.get("/List", UserController.bookList)
router.get("/booksInYear", UserController.getBooksInYear)
router.get("/ParticularBooks", UserController.getParticularBooks)
router.get("/getXINRBooks", UserController.getXINRBooks)
router.get("/getRandomBooks", UserController.getRandomBooks)
module.exports = router;