"use strict";
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../public/index.html'));
		console.log("incoming request to index");
});

router.get('/tasks', function(req, res) {
		var data=serverEmulator.getTasks();
		res.send(data);
		console.log("tasks data sended");
});

router.get('/task*', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/../public/info.html'));
	console.log("incoming request to info");
});

router.get('/get_task/:id', function (req, res) {
	var id = req.params.id;
	var task=serverEmulator.getTaskById(id);
	res.send(task);
	console.log("task data sended");
});

module.exports = router;