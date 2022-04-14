const express = require('express');
const router = express.Router();
//const UserModel= require("../models/userModel.js")
const authModel= require("../models/authModel")
const boModel= require("../models/BoModel.js")
//const UserController= require("../controllers/userController")
const mixController=require("../controllers/mixController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/NewBook", UserController.createBook  )
// router.get("/List", UserController.bookList)
// router.get("/booksInYear", UserController.getBooksInYear)
// router.get("/ParticularBooks", UserController.getParticularBooks)
// router.get("/getXINRBooks", UserController.getXINRBooks)
// router.get("/getRandomBooks", UserController.getRandomBooks)
router.post("/createNewAuthor", mixController.createNewAuthor)
router.post("/createNewBook", mixController.createNewBook)
router.get("/allBooks", mixController.allBooks)
router.get("/updatedBookPrice", mixController.updatedBookPrice)
router.get("/authorsName", mixController.authorsName)
module.exports = router;