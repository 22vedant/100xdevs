const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
	const kidneyNos = req.query.kidneyNos;
	const username = req.headers.username;
	const password = req.headers.password;

	if (username != `22vedant` && password != `123`) {
		res.status(403).json({
			msg: 'User not found',
		});
		return;
	}

	if (kidneyNos != 1 && kidneyNos != 2) {
		res.status(411).json({
			msg: 'Wrong Inputs',
		});
		return;
	}
	res.json({
		msg: `You have ${req.query.kidneyNos} healthy kidney/s`,
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
