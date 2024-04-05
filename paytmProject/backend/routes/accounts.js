const express = require('express');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const zod = require('zod');
const { Accounts, User } = require('../database/db');
const newUserAuth = require('../middlewares/newUserAuth');

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
	// console.log(accountDets.balance);
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
	const session = await mongoose.startSession();
	session.startTransaction();

	const { to, amount, sender } = req.body;

	const Sender = await User.findOne({
		username: sender,
	});

	senderUserId = Sender._id;
	const senderAcc = await Accounts.findOne({
		userId: senderUserId,
	});
	let senderBalance = senderAcc.balance;

	if (!senderAcc || senderBalance < amount) {
		await session.abortTransaction();
		return res.json({
			message: 'Insufficient Balance',
		});
	}
	const receiverAcc = await User.findOne({
		username: req.body.to,
	});
	const receiverUserId = receiverAcc._id;
	const toAccount = await Accounts.findOne({
		userId: receiverUserId,
	});
	let receiverBalance = toAccount.balance;

	if (!toAccount) {
		await session.abortTransaction();
		return res.json({
			message: 'Invalid Account',
		});
	}

	await Accounts.updateOne(
		{
			userId: senderUserId,
		},
		{
			$inc: {
				balance: -amount,
			},
		}
	).session(session);

	await Accounts.updateOne(
		{
			userId: receiverUserId,
		},
		{
			$inc: {
				balance: amount,
			},
		}
	).session(session);

	await session.commitTransaction();
	res.json({
		message: 'Transfer Successful',
	});
	session.endSession();
});

module.exports = router;

// if (existingUser) {

// 	const accountBalance = account.balance;

// 	account.balance = account.balance + req.body.amount;

// 	await account.save();

// 	res.json({
// 		newAmount: account.balance,
// 	});
// }
