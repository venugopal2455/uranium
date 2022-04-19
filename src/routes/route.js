const express = require('express');
const router = express.Router();
const moment=require("moment")
const middleware=require('../middleware/middleware')

function middleware1(req, res, next) {
    let timestamp=moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(`${timestamp} , ${req.socket.remoteAddress} , ${req.route.path}`)
    next();
}




router.get("/mid1", middleware1, middleware.mid1)
router.get("/mid2",middleware.mid2)
router.get("/mid3",middleware.mid3)

module.exports = router;
