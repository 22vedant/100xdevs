import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';

import { jwt, sign, decode, verify } from 'hono/jwt';

import { userRouter } from '../routes/user';
import { blogRouter } from '../routes/blog';

// type Bindings = {

// }
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

app.route('/api/v1/user', userRouter);

app.route('/api/v1/blog', blogRouter);

export default app;

// app.use('/api/v1/blog/*', async (c, next) => {
// 	const jwt = c.req.header('Authorization');
// 	if (!jwt) {
// 		c.status(401);
// 		return c.json({
// 			message: 'Wrong Credentials',
// 		});
// 	}
// 	const token = jwt.split(' ')[1];
// 	const payload = await verify(token, c.env.JWT_SECRET);
// 	if (!payload) {
// 		c.status(401);
// 		return c.json({ error: 'unauthorized' });
// 	}
// 	c.set('userId', payload.userId);
// 	await next();
// });
