const mongoose = require('mongoose');
const assert = require('assert');
const { Trial } = require('./database/db');

function newFun() {
	let session = null;
	return (
		Trial.createCollection()
			.then(() => Trial.startSession())
			// The `withTransaction()` function's first parameter is a function
			// that returns a promise.
			.then((_session) => {
				session = _session;
				return session.withTransaction(() => {
					return Trial.create([{ name: 'Test' }], {
						session: session,
					});
				});
			})
			.then(() => Trial.countDocuments())
			.then((count) => console.log(count))
			.then(() => session.endSession())
	);
}

// async function TransferFun(to, amount) {
//     let session = null
//         const existingUser = await User.findOne({
//             username: req.body.to,
//         })
// 		return (

// 		)
// }

newFun();
