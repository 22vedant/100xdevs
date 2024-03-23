const mongoose = require('mongoose');
const assert = require('assert');
const { Trial } = require('./database/db');

let session = null;
return Trial.createCollection()
	.then(() => mongoose.startSession())
	.then((session) => {
		userSession = session;
		const userToCreate = Trial.create({
			name: 'vedant',
		});
		return userToCreate;
	})
	.then(() => {
		userSession.startTransaction();
		return Trial.findOne({
			name: 'vedant',
		}).session(userSession);
	})
	.then((user) => {
		assert.ok(user.$session());
		user.name = 'chinta';
		return user.save();
	})
	.then(() => Trial.findOne({ name: 'chinta' }))
	.then((result) => {
		assert.ok(result);
		userSession.commitTransaction();
		userSession.endSession();
	});
