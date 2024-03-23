const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');
const { Accounts, User } = require('../database/db');

const router = express.Router();

router.post('/', async (req, res) => {
	const username = req.body.username;
	const users = await User.findOne({
		username: username,
	});
	const userid = users._id.toString();
	console.log(userid);
	const accountDets = await Accounts.findOne({
		userId: userid,
	});
	// console.log(accountDets);
	const accountBalance = accountDets.balance;
	console.log(accountDets.balance);
	res.status(200).json({
		balance: accountBalance,
	});
});

const transferBody = zod.object({
	to: zod.string().email(),
	amount: zod.number(),
});

router.post('/transfer', async (req, res) => {
	const { success } = transferBody.safeParse(req.body);
	if (!success) {
		return res.status(411).json({
			message: 'Incorrect inputs',
		});
	}
	const existingUser = await User.findOne({
		username: req.body.to,
	});
	if (existingUser) {
		const account = await Accounts.findOne({
			userId: existingUser._id,
		});
		const accountBalance = account.balance;

		account.balance = account.balance + req.body.amount;

		await account.save();

		res.json({
			newAmount: account.balance,
		});
	}
});

module.exports = router;
