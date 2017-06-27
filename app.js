"use strict"
var express = require('express');
var app = express();
var fs = require('fs');
var settings = fs.readFileSync('./settings/settings.txt','utf8');
global.servSettings = JSON.parse(settings);
var port = servSettings.server.port;
/*-----------------------------------------*/
global.serverEmulator = require('./modules/serverEmulator');
/*-----------------------------------------*/
app.use(express.static('public'));

var statusTable = require('./routes/statusTable');

app.use('/', statusTable);
/*-----------------------------------------*/
app.listen(port, function(){console.log('server started at port:'+port);});

