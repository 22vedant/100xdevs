const { Router } = require('express');
const { User, Course } = require('../db');
const router = Router();
const userMiddleware = require('../middleware/user');

// User Routes
router.post('/signup', (req, res) => {
	// Implement user signup logic
	const username = req.headers.username;
	const password = req.headers.password;

	User.create({
		username: username,
		password: password,
	}).then(() => {
		res.json({
			msg: 'User created',
		});
	});
});

router.get('/courses', (req, res) => {
	// Implement listing all courses logic
	Course.find({}).then((response) => {
		res.json({
			courses: response,
		});
	});
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
	// Implement course purchase logic
	const courseId = req.params.courseId;
	const username = req.headers.username;

	User.updateOne(
		{
			username: username,
		},
		{
			$push: {
				purchasedCourses: courseId,
			},
		}
	).then(
		res.json({
			msg: 'Purchase added',
		})
	);
});

// router.get('/purchasedCourses', userMiddleware, (req, res) => {
// 	// Implement fetching purchased courses logic
// 	const username = req.headers.username;
// 	const password = req.headers.password;

// 	User.findOne({
// 		username: username,
// 		password: password,
// 	}).then(
// 		Course.find({
// 			// $in: {
// 			// 	purchasedCourses: Array.prototype.filter((element) => {
// 			// 		element;
// 			// 	}),
// 			// },
// 			_id: {
// 				$in: User.username.purchasedCourses,
// 			},
// 		}).then((data) => {
// 			res.json({
// 				courses: data,
// 			});
// 		})
// 	);
// });
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
	// Implement fetching purchased courses logic
	const user = await User.findOne({
		username: req.headers.username,
	});

	const courses = await Course.find({
		_id: {
			$in: user.purchasedCourses,
		},
	});

	res.json({
		courses: courses,
	});
});

module.exports = router;
