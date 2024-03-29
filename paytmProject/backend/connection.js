const mongoose = require('mongoose');
const assert = require('assert');
const { Trial } = require('./database/db');

async function damnFun() {
	const session = await mongoose.startSession();

	try {
		Trial.createCollection()
			.then(() => {
				Trial.startSession();
			})
			.then((_session) => {
				session = _session;
				return session.withTransaction(() => {
					return Trial.create(
						[
							{
								name: 'Test',
							},
						],
						{ session: session }
					);
				});
			});
	} catch (error) {
		console.log('Transaction failed', error);
	} finally {
		await session.endSession;
	}
}

damnFun();
