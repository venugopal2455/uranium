const express = require('express');
const loggerModule = require('../logger/logger')
const helperModule = require('../util/helper')
const formatterModule = require('../validator/formatter')
const lodash = require('lodash')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     loggerModule.welcomeMessage()
//     helperModule.printTodaysDate()
//     helperModule.printCurrentMonth()
//     helperModule.printBatchInformation()
//     formatterModule.trimString()
//     formatterModule.changeCaseToUpper()
//     formatterModule.changeCaseToLower()
//     res.send('My first ever api!')
// });

router.get('/movies', function (req, res) {
let movies=["king","puspha","RRR","Ustadhotel"]
console.log('the list of movies '+" "+movies)

res.send('the list of movies'+" "+movies)
});
router.get('/movies/:indexNumber', function (req, res) {
    let movies=["king","puspha","RRR","Ustadhotel"]
    console.log('the list of movies ',req.params.indexNumber)
    
    res.send(movies[req.params.indexNumber])
    });
router.get('/movies/:indexNumber', function (req, res) {
    let arrMovies = ["king", "puspha",  "RRR", "ustadhotel"];

    if (req.params.indexNumber <= arrMovies.length)
        res.send(arrMovies[req.params.indexNumber]);
    else res.send('use a valid index number');
});
router.get('/films', function (req, res) {
    let arrMovies = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }];

    res.send(arrMovies);
});
router.get('/films/:indexnumber', function (req, res) {
    let arrMovies = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }];

    if (req.params.indexnumber <= arrMovies.length)
            res.send(arrMovies[req.params.indexnumber]);
       else res.send('No movie exists with this id')   
});
module.exports = router;
// adding this comment for no reason