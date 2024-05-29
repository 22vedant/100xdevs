import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign, decode, verify } from 'hono/jwt';

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

blogRouter.use('*', async (c, next) => {
	const jwt = c.req.header('Authorization');

	if (!jwt) {
		c.status(401);
		return c.json({
			message: 'Wrong Credentials',
		});
	}
	const token = jwt.split(' ')[1];
	const payload = await verify(token, c.env.JWT_SECRET);

	if (!payload) {
		c.status(401);
		return c.json({ error: 'unauthorized' });
	}
	c.set('userId', payload.userId);
	await next();
});

// blog creation
blogRouter.post('/create', async (c) => {
	const userId = c.get('userId');
	const { title, content } = await c.req.json();
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const newPost = await prisma.post.create({
		data: {
			title,
			content,
			published: true,
			authorId: userId,
		},
	});
	return c.json({
		message: 'Post Created',
	});
});

// blogRouter.post('/blogs', async (c) => {
// 	// const { title, content } = await c.req.json();
// 	const userId = c.get('userId');
// 	console.log(typeof userId);

// 	return c.json('Hello from Hono');
// });
//blog updation

blogRouter.put('/:id', async (c) => {
	const userId = c.get('userId');
	const { id } = c.req.param();
	const intId = parseInt(id);

	const { title, content } = await c.req.json();

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const updatePost = await prisma.post.update({
		where: {
			id: intId,
			authorId: userId,
		},
		data: {
			title,
			content,
		},
	});

	return c.json({
		message: 'Post has been updated',
	});
});

blogRouter.get('/posts', async (c) => {
	const userId = c.get('userId');

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const allblogs = await prisma.post.findMany({
		where: {
			authorId: userId,
		},
	});

	return c.json(allblogs);
});
//redundant for now
// blogRouter.get('/bulk', (c) => {
// 	//return all blogs
// 	return c.json({
// 		msg: 'Bulk messages',
// 	});
// 	// return c.text('Hello Hono!');
// });
