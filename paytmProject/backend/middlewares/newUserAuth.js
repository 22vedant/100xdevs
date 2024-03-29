const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const SECRET = require('../config');
const { User } = require('../database/db');

const newUserAuth = async (req, res, next) => {
	const authHeader = req.headers['authorization'];

	if (typeof authHeader !== 'undefined') {
		const bearer = authHeader.split(' ');
		const token = bearer[1];

		const user = await User.findOne({
			username: req.body.username,
		});
		console.log(user.password);
		if (user) {
			const userid = user._id;
			const decoded = jwt.verify(token, SECRET);

			if (
				decoded.userId === userid.toString() &&
				req.body.password === user.password
			) {
				res.status(200).json({
					message: 'Login Successful',
				});
				return;
			} else {
				res.status(411).json({
					message: 'Invalid credentials inside user.js',
				});
				return;
			}
		}

		next();
	} else {
		res.status(403).json({
			message: 'Invalid credentials',
		});
	}
};

module.exports = newUserAuth;
