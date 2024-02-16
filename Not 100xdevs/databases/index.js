const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:123@100xdevs-1.evtzftc.mongodb.net/');

const User = mongoose.model('Users', {
	name: String,
	email: String,
	password: String,
});

const user = new User({
	name: 'Vedant',
	email: 'asd@example.com',
	password: '123',
});
user.save().then(() => console.log('Data added'));
