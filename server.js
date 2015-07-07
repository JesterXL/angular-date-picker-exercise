console.log('Loading express server...');

var path = require('path');
var express = require('express');
// var favicon = require('serve-favicon');
var app = express();
app.use('/', express.static('./'));
app.use('/bower_components',  express.static('bower_components'));
app.use('/node_modules',  express.static('node_modules'));

var port = 8628;
app.listen(port, function()
{
    console.log('Demo server started on port ' + port);
});
