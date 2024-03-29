const express = require('express');
const { User, Accounts } = require('../database/db');
const router = express.Router();
const jwt = require('jsonwebtoken');
const zod = require('zod');
const SECRET = require('../config');
const userAuth = require('../middlewares/userAuth');
const newUserAuth = require('../middlewares/newUserAuth');

const signupBody = zod.object({
	username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string(),
});

//signup
router.post('/signup', async (req, res) => {
	const { success } = signupBody.safeParse(req.body);
	if (!success) {
		return res.status(411).json({
			message: 'Email already taken / Incorrect inputs',
		});
	}
	const existingUser = await User.findOne({
		username: req.body.username,
	});

	if (existingUser) {
		res.status(411).json({
			msg: 'User already exists',
		});
	}

	const user = await User.create({
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password,
	});

	const userId = user._id;
	// console.log(typeof userId);

	await Accounts.create({
		userId,
		balance: Math.floor(Math.random() * 10000 + 1),
	});

	const token = jwt.sign({ userId }, SECRET);
	// console.log(token);

	res.json({
		token: token,
	});
});

// signin
const signInBody = zod.object({
	username: zod.string().email(),
	password: zod.string(),
});

router.post('/signin', userAuth, async (req, res) => {
	const token = req.token;

	const { success } = signInBody.safeParse(req.body);
	if (!success) {
		res.status(411).json({
			message: 'Bad credentials',
		});
	}

	const user = await User.findOne({
		username: req.body.username,
	});
	if (user) {
		const userid = user._id;
		const decoded = jwt.verify(token, SECRET);

		if (decoded.userId === userid.toString()) {
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
	res.status(411).json({
		message: 'Error while logging in ',
	});
	return;
});

//user update
const updateBody = zod.object({
	username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string(),
});
router.put('/forgotpassword', userAuth, async (req, res) => {
	const token = req.token;
	const { success } = signInBody.safeParse(req.body);
	if (!success) {
		res.status(411).json({
			message: 'Bad credentials',
		});
	}
	const user = await User.findOne({
		username: req.body.username,
	});
	if (user) {
		const userid = user._id;
		const decoded = jwt.verify(token, SECRET);
		if (decoded.userId === userid.toString()) {
			console.log(userid);
			console.log(req.body.password);
			console.log(req.body.firstName);

			await User.updateOne({ _id: userid }, req.body);
			res.status(200).json({
				message: 'credentails updated',
			});
			return;
		} else {
			res.status(411).json({
				message: 'Invalid credentials inside user.js',
			});
			return;
		}
	}
});

router.get('/bulk', async (req, res) => {
	const filter = req.query.filter;
	const users = await User.find({
		$or: [
			{
				firstName: {
					$regex: filter,
				},
			},
			{
				lastName: {
					$regex: filter,
				},
			},
		],
	});

	console.log(filter.toString());
	res.json({
		user: users.map((index) => ({
			firstName: index.firstName,
			lastName: index.lastName,
		})),
	});

	// console.log(filter);
	// res.json({
	// 	message: filter,
	// });
});

router.post('/trial', newUserAuth, async (req, res) => {
	const { success } = signInBody.safeParse(req.body);
	if (!success) {
		res.status(411).json({
			message: 'Bad credentials',
		});
	}
	res.status(411).json({
		message: 'Error while logging in ',
	});
	return;
});

module.exports = router;
