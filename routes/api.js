var express = require('express')
var router = express.Router();
var path = require('path');
var reservations = require('../Data/data.js');



router.get('/', function(req, resp) {
    var rsvp = [];
    var respArray = [];
    var waitList = [];
    if (reservations.length < 6) {
        resp.json(reservations);
    } else {

        for (var i = 0; i < 5; i++) {
            respArray.push(reservations[i]);
        }
        for (var i = 5; i < reservations.length; i++) {
            waitList.push(reservations[i]);
        }
        rsvp = [{
            'WaitList': waitList,
            'Reservations': respArray
        }];
        resp.json(rsvp);
    }
});


// router.get('/reserve', function(req, resp) {
//     var rsvp = [];
//     if (reservations.length < 6) {
//         resp.json(reservations);
//     } else {
//         var respArray = [];
//         var waitList = [];
//         for (var i = 0; i < 5; i++) {
//             respArray.push(reservations[i]);
//         }
//         for (var i = 5; i < reservations.length; i++) {
//             waitList.push(reservations[i]);
//         }
//         rsvp = [{
//             'Wait List': waitList,
//             'Reservations': respArray
//         }];
//         resp.json(rsvp);
//     }
// });


router.post('/addreservation', function(req, resp) {
    var newRSVP = req.body;
    reservations.push(newRSVP);
    console.log('New Reservation Added');
});


router.get('/tables', function(req, res) {
  res.json(reservations);
});


// Shows waitlist in JSON format
router.get('/waitlist', function(req, res) {
    var waitList = [];
    for (var i = 5; i < reservations.length; i++){
        waitList.push(reservations[i]);
    }
  res.json(waitList);
});


module.exports = router;
