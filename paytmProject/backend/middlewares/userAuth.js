const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const SECRET = require('../config');

const userAuth = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	if (typeof authHeader !== 'undefined') {
		const bearer = authHeader.split(' ');
		const token = bearer[1];

		req.token = token;
		next();
	} else {
		res.status(403).json({
			message: 'Invalid credentials',
		});
	}
};

module.exports = userAuth;

// const authHeader =
// 	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY0NTZjZWYyMmQ5MWVmNzliMzA2NjciLCJpYXQiOjE3MTA1MTE4MjJ9.dZTbQ1Cqmt5pnouKYAPKsxku_82NNGAsViveVoaj1Zc';

// const bearer = authHeader.split(' ');
// console.log(bearer);
// console.log(typeof bearer);
// const token = bearer[1];

// console.log(token);
