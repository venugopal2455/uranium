const express = require('express');
const router = express.Router();
const userController= require("../controllers/controller")
const middle= require("../middleware/middleware.js")
router.post("/user",userController.createUser  )

router.post("/logins", userController.loginUser)


router.get("/user/:userId",middle.mid1,userController.getUserData)

router.put("/user/:userId",middle.mid1,userController.updateUser)

router.delete("/user/:userId", middle.mid1,userController.deleteUser)
module.exports = router;