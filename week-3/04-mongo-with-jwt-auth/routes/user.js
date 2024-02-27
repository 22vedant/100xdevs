const { Router } = require('express');
const router = Router();
const { User } = require('../db');
const userMiddleware = require('../middleware/user');

// User Routes
router.post('/signup', (req, res) => {
	// Implement user signup logic
	const username = req.headers.username;
	const password = req.headers.password;
	User.create({
		username: username,
		password: password,
	}).then(
		res.json({
			msg: 'Done',
		})
	);
});

router.post('/signin', (req, res) => {
	// Implement admin signup logic
});

router.get('/courses', (req, res) => {
	// Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
	// Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
	// Implement fetching purchased courses logic
});

module.exports = router;
