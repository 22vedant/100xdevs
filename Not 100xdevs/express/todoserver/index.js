const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 3000;

app.use(bodyParser.json());

let users = [
	{
		name: 'Vedant',
		kidneys: [
			{
				healthy: true,
			},
		],
	},
];
//can be implemented using filter
app.get('/', (req, res) => {
	const userKidneys = users[0].kidneys;
	// console.log(userKidneys);
	const numberOfKidneys = userKidneys.length;
	let numberOfHealthyKidneys = 0;
	for (let i = 0; i < userKidneys.length; i++) {
		if (userKidneys[i].healthy) {
			numberOfHealthyKidneys += 1;
		}
	}

	const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
	// console.log(users);
	res.json({
		userKidneys,
		numberOfKidneys,
		numberOfHealthyKidneys,
		numberOfUnhealthyKidneys,
	});
});

app.post('/', (req, res) => {
	const isHealthy = req.body.isHealthy;
	users[0].kidneys.push({
		healthy: isHealthy,
	});

	res.json({
		msg: 'Done',
	});
});

app.put('/', (req, res) => {
	for (let i = 0; i < users[0].length; i++) {
		users[0].kidneys[i].healthy = true;
	}
	res.json({ msg: 'Done' });
});

app.delete('/', (req, res) => {
	const newKidneysArr = [];
	for (let i = 0; i < users[0].kidneys.length; i++) {
		if (users[0].kidneys[i].healthy) {
			newKidneysArr.push({
				healthy: true,
			});
		}
	}
	console.log(newKidneysArr);
	users[0].kidneys = newKidneysArr;
	res.json({ msg: 'Done' });
});

app.listen(port, () => {
	console.log(`Listening on the port ${3000}`);
});
