const express = require('express');
const mongoose = require('mongoose');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./database/db');

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todos', (req, res) => {
	const createPayload = req.body;
	const parsedPayload = createTodo.safeParse(createPayload);
	// console.log(parsedPayload.data.title);
	if (!parsedPayload.success) {
		res.status(411).json({
			msg: 'Wrong input',
		});
		return;
	}
	// res.json({
	// 	title: parsedPayload.data.title,
	// 	description: parsedPayload.data.description,
	// });
	Todo.create({
		title: parsedPayload.data.title,
		description: parsedPayload.data.description,
		completed: false,
	}).then(() => {
		res.json({
			msg: 'Todo Created Successfully',
		}).status(200);
	});
});
app.get('/todos', (req, res) => {
	const title = req.params;

	Todo.find({
		// title: title,
	})
		.then((data) => {
			// console.log(`Found ${data.title}`);
			res.json({
				data,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});
app.put('/todosCompleted', (req, res) => {
	const updatePayload = req.body;
	const parsedPayload = updateTodo.safeParse(updatePayload);
	// console.log(parsedPayload);
	if (!parsedPayload.success) {
		res.status(411).json({
			msg: 'Wrong input',
		});
		return;
	}
	Todo.updateOne(
		{ _id: parsedPayload.data.id },
		{
			$set: {
				completed: true,
			},
		}
	)
		.then(() => {
			res.json({
				msg: 'Updated Successfully',
			});
		})
		.catch((err) => {
			res.json({
				msg: err,
			});
		});
});

app.listen(3200, () => {
	console.log('You are listening on 3200 port');
});
