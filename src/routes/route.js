const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowincontroller")
const tempController=require('../controllers/tempcontroller')
const imageController=require('../controllers/imagecontroller')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getByvacsession", CowinController.getByvacSessions)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get('/temp/getsortedCities',tempController.getsortedCities)
router.get('/temp/getLondon',tempController.getLondon)
router.get('/image/getAll',imageController.getAll)
// router.post('/image/getId',imageController.getId)
router.post('/meme',imageController.meme)
module.exports = router;