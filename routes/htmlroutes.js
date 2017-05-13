var express = require('express')
var router = express.Router();
var path = require('path');



router.get('/', function(req, resp) {
	// insert file destination
	resp.sendFile(path.join(__dirname, '../public/', 'home.html'));
})

router.get('/reservation', function(req, resp) {
	// insert file destination
	resp.sendFile(path.join(__dirname, '../public/', 'make.html'));
})

router.get('/viewreservation', function(req, resp) {
	// insert file destination
	resp.sendFile(path.join(__dirname, '../public/', 'tables.html'));
})

module.exports =  router;