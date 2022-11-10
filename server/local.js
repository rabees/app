/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

require('dotenv').config();

const { response, json } = require('express');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const listner = server.listen(process.env.PORT, function() {
	console.log('Listening on', listner.address().port);
});

require('./socket')(io);

// require('dns').resolve('www.google.com', function(err) {

// 	 console.log(err);
// 	if (err) {
// 	   console.log("No internet connected");
// 	} else {
// 		console.log("Internet connection restored");
// 	}
//   });

app.get('/contact', function (req, res) {
	res.send('Ok');
});