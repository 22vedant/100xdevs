const mongoose = require('mongoose');

mongoose.connect(
	'mongodb+srv://vedantchinta223:123@cluster0.mlq0cgx.mongodb.net/paytm'
);

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		minLength: 3,
		maxLength: 30,
	},
	password: {
		type: String,
		required: true,
		minLength: 8,
		maxLength: 30,
	},
	firstName: {
		type: String,
		required: true,
		trim: true,
		maxLength: 50,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
		maxLength: 50,
	},
});

const accountSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	balance: {
		type: Number,
		required: true,
	},
});

const trialSchema = new mongoose.Schema({
	name: String,
});

const User = mongoose.model('User', userSchema);
const Accounts = mongoose.model('Accounts', accountSchema);
const Trial = mongoose.model('Trial', trialSchema);
module.exports = {
	User,
	Accounts,
	Trial,
};
