const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '123546';

const app = express();
app.use(express.json());
const ALL_USERS = [
	{
		username: 'vedant@example.com',
		password: '123',
		name: 'Vedant',
	},
	{
		username: 'example@example.com',
		password: '456',
		name: 'Damn',
	},
	{
		username: 'Daniel@example.com',
		password: '789',
		name: 'Daniel',
	},
];

const userExists = (username, password) => {
	let userExists = false;
	const found = ALL_USERS.find((element) => {
		element.username === username && element.password === password;
		userExists = true;
	});
	return userExists;
};

// app.get('/users', (req, res) => {
// 	const token = req.headers.authorization;
// 	try {
// 		const decoded = jwt.verify(token, jwtPassword);
// 		const username = decoded.username;
// 	} catch (error) {
// 		return res.status(403).json({
// 			msg: 'Invalid token',
// 		});
// 	}
// });
app.get('/users', (req, res) => {
	const token = req.headers.authorization;

	const decoded = jwt.verify(token, jwtPassword);
	const username = decoded.username;
	res.json({
		users: ALL_USERS.filter((value) => {
			if (value.username == username) {
				return false;
			} else {
				return true;
			}
		}),
	});
});

app.listen(3600);
