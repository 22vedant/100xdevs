const express = require('express');
const app = express();
const z = require('zod');

app.use(express.json());

// app.post('/', (req, res) => {
// 	const kidney = req.body.kidney;
// 	const kidneyLength = kidney.length;

// 	res.send('Your kidney length is ' + kidneyLength);
// });

app.post('/', (req, res) => {
	const schema = z.array(z.number());
	const kidney = req.body.kidney;
	const response = schema.safeParse(kidney);
	// const kidneyLength = kidney.length;
	if (!response.success) {
		res.status(411).json({
			msg: 'Input is invalid',
		});
	} else {
		res.send({
			response,
		});
	}
});

//global catches
//these are called error based middlewares as it has 4 inputs in the callback
// app.use((err, req, res, next) => {
// 	res.json({
// 		msg: 'Server down',
// 	});
// });

app.listen(3000, () => {
	console.log('listening on port 3000');
});
