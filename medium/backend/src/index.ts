import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';

import { jwt, sign, decode, verify } from 'hono/jwt';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

//signup
//implement refresh tokens
app.post('/api/v1/user/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const { email, password, name } = await c.req.json();

	const newUser = await prisma.user.create({
		data: {
			email,
			password,
			name,
		},
	});

	const userId = newUser.id;

	const payload = {
		email,
		userId,
		// exp: Math.floor(Date.now() / 1000) + 60 * 5, // Token expires in 5 minutes
	};
	const token = await sign(payload, c.env.JWT_SECRET);
	return c.json({ email, password, name, token: 'Bearer ' + token });
});

//signin
//this route is wrong
app.post('/api/v1/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const { email } = await c.req.json();
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		c.status(403);
		return c.json({ error: 'user not found' });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
});

app.use('/api/v1/blog/*', async (c, next) => {
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
//blog creation
app.post('/api/v1/blog', (c) => {
	// const { title, content } = await c.req.json();
	// const userId = c.get('userId');
	console.log(typeof c.get('userId'));
	return c.json({
		message: 'Signin OK',
	});
});

app.post('/api/v1/blogs', async (c) => {
	// const { title, content } = await c.req.json();

	return c.json('Hello from Hono');
});
//blog updation
app.put('/api/v1/blog/:id', async (c) => {
	const { id } = c.req.param();

	return c.text(id);
});
app.get('/api/v1/blog/:id', async (c) => {
	const { id } = c.req.param();

	return c.text(id);
});

app.get('/api/v1/blog/bulk', (c) => {
	//return all blogs
	return c.text('Hello Hono!');
});

export default app;
