var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 5112;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/routing'));

var index = require('./routes/htmlroutes.js');
var api = require('./routes/api.js');

app.use('/', index);
app.use('/api', api);


app.listen(PORT, function() {
    console.log('Server is is being served on localhost:%s', PORT);
})
