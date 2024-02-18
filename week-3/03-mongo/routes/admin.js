const { Router } = require('express');
const { Admin, Course } = require('../db');
const adminMiddleware = require('../middleware/admin');
const router = Router();

let globalCid = 1;

// Admin Routes
router.post('/signup', (req, res) => {
	// Implement admin signup logic
	const username = req.body.username;
	const password = req.body.password;

	// Admin.findOne({

	// })

	Admin.create({
		username: username,
		password: password,
	})
		.then(() => {
			res.json({
				msg: 'User created',
			});
		})
		.catch(() => {
			res.json({
				msg: 'Error occured',
			});
		});
});

router.post('/courses', adminMiddleware, (req, res) => {
	// Implement course creation logic
	const title = req.body.title;
	const description = req.body.description;
	const price = req.body.price;
	const imageLink = req.body.imageLink;

	// console.log(Course);

	Course.create({
		title: title,
		description: description,
		price: price,
		imageLink: imageLink,
	}).then(() => {
		res.json({
			msg: 'Course created successfully',
			//return _id
		});
	});
});

router.get('/courses', adminMiddleware, (req, res) => {
	// Implement fetching all courses logic
	// res.send('Hello');
	// console.log(Course);
	Course.find({}).then((response) => {
		res.json({
			courses: response,
		});
	});
});

module.exports = router;
